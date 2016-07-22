import { createAction } from 'redux-actions';
import { push } from 'react-router-redux'; //做跳转时使用
import ajax from '../services/ajax.js'; //经过封装的加强型 ajax 函数

//仅用于指明 prefix
const prefix = 'dev/';

let actions = {
	
	toOpenOrder: createAction('dev/OPEN_ORDER'),
	
	toSetUpAction2: createAction('dev/ACTION_2'),
	
	toSetUpAction3: () => (dispatch, getState) => {
		
		ajax({
			url: '/dev/test',
			method: 'GET',
			//mock: 0,
			//error: 404
		}).done(data => {
			dispatch(actions.toSetUpAction2(data)); //以调用纯动作结束
		}).fail(error => {
			console.log('error_1',error);
		})
		
	},

	goto: com => push('/dev/' + com)


};

export default actions;