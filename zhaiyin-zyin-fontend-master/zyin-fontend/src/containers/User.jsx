import React from 'react';
import { connect } from 'react-redux';

class User extends React.Component {
  
  render(){
    
    const { state } = this.props;
    
    return (
      <div className="app">
        我是个人中心: {state.foo}
      </div>
    );
    
  }
  
  
}

function select(state) {
	return {
		state: state.user
	}
}

export default connect(select)(User);