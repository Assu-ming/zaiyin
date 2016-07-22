/**
 * 示例 api
 */

import {bool, string, natural} from './_type.js';

let api = {
	
	//为了使API跟清晰，属性名称改为url全称 /dev/test
	//为了统一 “数据模板定义规范” 和 “数据占位符定义规范” 的显示格式，请用 '' 包裹属性名
	
	'/dev/test' : {
		req: {
			'name': '@string'
		},
		res: {
			'orderId': /\d{32}/,
			'status|1': ['toPay','toPrint','toTake'],
			'name': string,
			'boy|1-1000': 0
		}
	},
	
	'/appleBasket/pickApple' : {
		req: {},
		res: {
			'weight|200-300': 0
		}
	}

};

export default api;

