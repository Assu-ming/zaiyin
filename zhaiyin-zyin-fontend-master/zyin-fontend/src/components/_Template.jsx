/**
 * 普通组件的模板
 * by @Birdy from 2016/05/24
 */

//引入改组件的样式表，注意加上 .scss 后缀
import 'styles/_example-style.scss'

//引入所需的npm库
import React from 'react';

class Component extends React.Component {

	render() {

		//获取 state,actions 两个属性
		let { state, actions } = this.props;

		/**
		 * 这个区域是 mock 数据区，也作为组件文档，请书写清楚
		 */
		let mockState = {
			foo: 'test'
		};

		let mockActions = {
			bar: () => console.log('bar')
		};

		/**
		 * 开关这行代码，用于切换装入的数据来源。(为了开关的方便，请把两句代码合成一行)
		 * 在开发阶段打开，使用内部 state 和 action, 开发完成后请注释关闭
		 */
		state = mockState; actions = mockActions;


		/**
		 * 以下是 jsx 布局区域，对于动态内容，请使用 state 的数据填充
		 */
		return (
			<div className="topNavbar">
				我是实例组件 {state.foo}
				<button onClick={actions.bar}>按钮</button>
			</div>
		);

	}

}

export default Component;