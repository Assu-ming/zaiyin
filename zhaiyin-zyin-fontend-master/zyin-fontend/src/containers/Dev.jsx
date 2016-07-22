import 'styles/dev-component.scss';

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'antd';

//引入项目里的各个组件
import DevExample from 'components/DevExample';
import Print_ChoosePrintPoint from 'components/Print_ChoosePrintPoint';
import Print_FileList from 'components/Print_FileList';

//把组件登记在表格里面
let comArray = {
  DevExample,
  Print_ChoosePrintPoint,
  Print_FileList
};

import actions from 'actions/devActions';

class Dev extends React.Component {
  
  render(){
    
    const { state, actions } = this.props;

    let curCom = this.props.params.comName;
    console.log(curCom);

    let btnGroup = Object.keys(comArray).map( com => <Button onClick={()=> actions.goto(com)} key={com}>{com}</Button>);
    
    return (
      <div className="dev">
        {curCom === undefined ? btnGroup : React.createElement(comArray[curCom])}
      </div>
    );
    
  }
  
  
}

function selectState(state) {
	return {
		state: state.dev
	}
}

function buildActionDispatcher(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(selectState, buildActionDispatcher)(Dev);