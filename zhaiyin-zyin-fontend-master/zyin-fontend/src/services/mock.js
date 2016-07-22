import { mock } from 'mockjs';

//引入api文档
import dev from '../apis/_example';

/**
 * 从 api文档 到 api引擎 的封装器（装配器）
 * 原理是这样： mockEngine = mockPower(apiObj)
 * mockEngine 的用法是直接产生mock数据,包括req 和 res, 如下：
 * mockRequest = mockEngine(api).req();
 * mockResponse = mockEngine(api).res( <json = false> );
 */
const mockPower = apiObj => {
	
	let rawMockEngine = {};
	
	for ( let url in apiObj) {
		if (apiObj.hasOwnProperty(url)) {
			let api = apiObj[url];
			rawMockEngine[url] = {
				req : () => mock(api.req) ,
				res : ( json = false ) => {
					let mockData = mock(api.res);
					if (json) mockData = JSON.stringify(mockData);
					return mockData;
				}
			}
		}
	}
	
	//做一下调用格式转换，从数组调用形式转化为函数调用形式
	let mockEngine = url => rawMockEngine[url];

	return mockEngine;
};

// 把每个板块的 api 组装到一个对象
let apis = Object.assign({},dev);

// 生成 mockEngine
let mockEngine = mockPower(apis);

export default mockEngine;