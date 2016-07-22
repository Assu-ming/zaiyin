/**
 * reducer 模板
 * by @Birdy from 2016/05/24
 */

export default (state = {
	_namespace_: 'template'
}, action) => {

	//如果不是该前缀，则直接返回
	if (action.type.indexOf(state._namespace_) !== 0)
		return state;
	let actionLastname = action.type.split('/').pop();
	
	//这样子的 case 就不用输入前缀了
	switch (actionLastname) {
		case 'MOCK_ACTION_1':
			//TODO
			return state;
			
		default:
			console.info('找不到 ' + state._namespace_ + ' 下的 ' + actionLastname + ' reducer!');
			return state;
	}

};