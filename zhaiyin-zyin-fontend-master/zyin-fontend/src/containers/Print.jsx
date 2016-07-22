import React from 'react';
import { connect } from 'react-redux';

class Print extends React.Component {
  
  render(){
    
    const { state } = this.props;
    
    return (
      <div className="app">
        我是打印组件: {state.foo}
      </div>
    );
    
  }
  
  
}

function select(state) {
	return {
		state: state.print
	}
}

export default connect(select)(Print);