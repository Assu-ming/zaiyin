// reducer 模板

export default (state = {
	name : 'index'
}, action) => {
  
	const prefix = 'index/';
    
	switch (action.type) {
		case prefix + 'MOCK_ACTION':
			return state;
		default:
			return state;
	}
  
};