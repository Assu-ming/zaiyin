import {ajax as _ajax, Deferred } from 'jquery';
import config from 'config';
import mock from './mock';

/**
 * ajax 服务，基于 jqery ajax 函数的二次开发，扩展了以下几个功能
 * 1、mock数据支持: mock 属性，在开发环境默认打开，在部署环境默认关闭
 * 2、json 自动编码，设置http头的功能: json 属性，默认关闭
 * 3、模拟失败: error 属性，默认为 false, 设置为 1 或 true 可以收到产生404错误
 * 4、ClientID 自动添加的功能: 会根据环境自动添加
 */
export default function ajax(_options){
	
	let options = Object.assign({},_options);
	
	/**
	 * mock数据支持
	 * 原理：拦截并转发
	 */
	if(options.mock === undefined){
		options.mock = config.appEnv == 'dev' ;
	}
	if(options.mock){
		
		//手动产生错误，目前仅支持404
		if(options.error ){
			console.info('你手动触发了错误:',options.error );
			return Deferred().reject({
				status: options.error
			});
		}
		
		// 转发到 mock 服务
		let deferredObj;
		try {
			deferredObj = Deferred().resolve(mock(options.url).res());
		}catch(err){
			console.error('找不到该api :',options.url );
			return Deferred().reject(new Error('找不到目标api'));
		}
		
		return deferredObj
	}
	
	/**
	 * json方式自动化处理
	 */
	if(options.json){
		options.contentType = 'application/json';
		options.data = JSON.stringify(options.data);
	}
	
	/**
	 * 增加 header 或 query 处的 clientId
	 */
	if(config.appEnv == 'test'){
		
		let linkChar = options.url.indexOf('?') < 0 ? '?' : '&';
		// TODO 从 clientId 服务读取
		options.url += ( linkChar + 'CLIENTID=123456');
	}
	
	/**
	 * 自动化测试主机支持
	 */
	if(config.appEnv == 'test' && options.url.indexOf('http') != 0) {
		//智能加上主机地址
		options.url = config.host + options.url;
	}
	
	return _ajax(options);
}