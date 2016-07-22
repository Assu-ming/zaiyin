import React from 'react';
import { connect } from 'react-redux';

class Index extends React.Component {
  
  render(){
    
    const { state } = this.props;
    
    return (
      <div className="app">
        我是首页: {state.foo}
      </div>
    );
    
  }
  
  
}

function select(state) {
	return {
		state: state.index
	}
}

export default connect(select)(Index);