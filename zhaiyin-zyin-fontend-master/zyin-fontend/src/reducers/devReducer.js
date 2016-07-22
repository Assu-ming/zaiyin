// reducer 模板

export default (state = {
	orderId: '123456789',
    time : '2016-05-20 08:30', // 下单时间
    fileCount: 6, // 文件个数
    money: '2.40', //订单金额
    status: '待打印', //订单状态
    statusColor: 'blue' //状态的颜色, 默认值为 blue, 还支持 red , gray
}, action) => {
  
  	//供查看，不一定要用
	const reducerPrefix = 'dev/';
    
	switch (action.type) {
		case 'dev/MOCK_ACTION':
			return state;
		default:
			return state;
	}
  
};