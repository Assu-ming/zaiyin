import React from 'react';

import TopNavbar from 'components/TopNavbar';

export default class App extends React.Component {
  render(){
    return (
      <div className="app">
        <TopNavbar state="123"/>
        <div style={{
          width: '1100px',
          margin: '0px auto'
        }}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
