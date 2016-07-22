/**
 * library index
 * by @Birdy from 2016/05/30
 */

export default (state = {
	_namespace_: 'library/index'
}, action) => {
	
	//如果不是该前缀，则直接返回
	if (action.type.indexOf(state._nameSpace_) !== 0)
		return state;
	let actionLastname = action.type.split('/').pop();

	switch (actionLastname) {
		case 'MOCK_ACTION_1':
			//TODO
			return state;
			
		case 'MOCK_ACTION_2':
			//TODO
			return state;
			
		default:
			console.info('找不到 ' + state._namespace_ + ' 下的 ' + actionLastname + ' reducer!');
			return state;
	}

};