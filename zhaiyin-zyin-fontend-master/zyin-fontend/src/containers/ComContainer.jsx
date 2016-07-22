//引入改组件的样式表，注意加上 .scss 后缀
import 'styles/_example-style.scss'

//引入所需的npm库
import React from 'react';

class Container extends React.Component {

	render() {

		let { state } = this.props;

		return (
			<div className="app">
				我是示例容器: {state.foo}
			</div>
		);

	}


}

export default Container;