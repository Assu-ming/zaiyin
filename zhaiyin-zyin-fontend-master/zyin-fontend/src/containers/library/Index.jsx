/**
 * 容器组件的模板
 * by @Birdy from 2016/05/24
 */


//引入改组件的样式表，注意加上 .scss 后缀
import 'styles/_example-style.scss'

//引入所需的npm库
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//引入所需的组件
import actions from 'actions/_exampleActions';


class Container extends React.Component {

	render() {

		let { state } = this.props;

		return (
			<div className="app">
				我是文库主页 {state._namespace_}
			</div>
		);

	}


}

function selectState(state) {
	return {
		state: state.library.index
	}
}

function buildActionDispatcher(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(selectState, buildActionDispatcher)(Container);