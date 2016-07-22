import 'styles/topNavbar.scss';
import React from 'react';
import { Link } from 'react-router';

export default props => {
  
  //获取 state,actions 两个属性
  let {state,actions} = props;
  
  //测试代码
  let mockState = {
    foo : 'test'
  };
  let mockActions = {
	  bar : () => console.log('bar')
  };
  
  //开关这两行代码，可以切换装入的数据和动作的来源（来自参数/mock）
  state = mockState;
  actions = mockActions;
  
  return (
    <div className="topNavbar">
      <div className="center">
        <div className="left">
        
          <img src="./images/logo.png" alt=""/>
          
          <div className="navList">
            <Link to="/index" className="navItem" activeClassName="active">主页</Link>
            <Link to="/print" className="navItem" activeClassName="active">打印车</Link>
            <Link to="/library" className="navItem" activeClassName="active">校园文库</Link>
            <Link to="/dev" className="navItem" activeClassName="active">开发</Link>
            <Link to="/apple" className="navItem" activeClassName="active">苹果篮子</Link>
          </div>
          
        </div>
        <div className="right">
        
          <Link to="/user" className="me" activeClassName="active">
            <div className="text">
              小明的宅印
              <span className="msgCount">2</span>
            </div>
            <img src="images/xiaoming.jpg" alt=""/>
          </Link>
          
        </div>
      </div>
    </div>
  );

}