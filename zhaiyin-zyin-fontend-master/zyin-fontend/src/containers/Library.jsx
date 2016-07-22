import React from 'react';
import { connect } from 'react-redux';

class Library extends React.Component {
  
  render(){
    return (
      <div className="library">
        {this.props.children}
      </div>
    );
    
  }
  
}

function select(state) {
	return {
		state: state.library
	}
}

export default connect(select)(Library);