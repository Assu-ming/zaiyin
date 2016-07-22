import React from 'react';

export default props => {

  //获取 state, actions 两个属性, 以及生成 isMock 变量
  let {state, actions} = props;
  let isMock = state === undefined;

  /**
   * 这个区域是 mock 数据区，也作为组件文档，表明组件如何使用
   * 请说明清楚每个数据的含义
   */
  let mockState = {
    orderId: '123456789',
    time: '2016-05-20 08:30', // 下单时间
    fileCount: 6, // 文件个数
    money: '2.40', //订单金额
    status: '待打印', //订单状态
    statusColor: 'blue' //状态的颜色, 默认值为 blue, 还支持 red , gray
  };
  // 对于每个支持的 actions, 这里给出其签名, 并在函数体里把参数传入的log函数, 打印出来
  let mockActions = {
    openOrder: orderId => console.log('openOrder', orderId),
    action2: (arg1, arg2) => console.log('action2', arg1, arg2),
    action3: () => console.log('action3')
  };


  /**
   * 开关【第一行】代码，用于切换装入的数据来源。(为了开关的方便，请把两句代码合成一行)
   * 在开发阶段开启这行代码，使用内部 state 和 action, 发布组件时请注释掉行代码
   */
  //isMock = true;
  if (isMock) {
    state = mockState;
    actions = mockActions;
  }

  //jsx布局内容
  return (
    <div className="default-component">
      这个板块是做组件开发的工作台，请在 containers/Dev.jsx 中把 import MyComponent from '../components/Default'; 中的 Default 改为要开发的组件名称，即可开始开发。<br />
      下面的例子，展示怎么使用 state 和 actions: <br />
      <br />
      <div className="zyin-big">这样使用state: </div><br />

      <div className="order-item">
        订单号：{state.orderId} <br/>
        下单时间：{state.time} <br/>
        文件个数：{state.fileCount} <br/>
        订单金额：￥ {state.money} <br/>
        订单状态： <span className="status">{state.status}</span>
      </div>

      <br />
      这样使用actions: <br />
      <button className="zy-btn" onClick={actions.openOrder.bind(this, 123456) }>
        写法一: 传统写法
      </button>
      <button className="zy-btn" onClick={() => actions.openOrder(123456) }>
        写法二: ES6 写法，推荐！
      </button>
      <button className="zy-btn" onClick={() => actions.action2(123456, 7890) }>
        写法二，使用第二个动作
      </button>
      <button className="zy-btn" onClick={ actions.action3 }>
        不传递action参数的动作
      </button>
    </div>
  );

}