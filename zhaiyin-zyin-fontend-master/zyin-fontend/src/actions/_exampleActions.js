/**
 * action 例子
 * by @Birdy from 2016/05/24
 */

import { createAction as createActionCreator, handleAction, handleActions } from 'redux-actions';
import { push } from 'react-router-redux'; //做跳转时使用
import ajax from '../services/ajax'; //经过封装的加强型 ajax 函数

const prefix = 'prefix/';

let actions = {
	
  
	// 用原生写法生成 plain action（可以称为原生动作，每个原生动作都对应一个 reducer case）
	toCrerateAction1: arg1 => ({
		type: prefix + 'ACTION_1',
		payload: arg1
	}),
	
  
	// 用 createActionCreator 生成一个 plain action
	toCrerateAction2: createActionCreator(prefix + 'ACTION_2'),
	
  
	// 生成一个 thunk action ( 简单地理解，这种 thunk action 是一个函数段，发起 thunk action 相当于执行代码段 )
  // 非纯动作一般会以调用纯动作结束
	toCrerateAction3: arg1 => (dispatch, getState) => {
    //可以在 thunk 做一系列函数操作，通常包括条件判断和ajax请求
		if(getState().foo){
      dispatch(actions.toCrerateAction1(arg1)); //以调用纯动作结束
    }
		else{
      ajax({
        url: 'foo/bar',
        method: 'GET'
      }).done(data => {
        dispatch(actions.toCrerateAction2(data)); //以调用纯动作结束
      }).fail(error => {
        console.log(error);
      })
    }
	}
  
  
};

export default actions;