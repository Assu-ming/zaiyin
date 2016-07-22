/* 引入样式 */
import 'normalize.css/normalize.css'; //浏览器统一化样式表
import 'antd/dist/antd.css'; // ant.design 样式
import 'styles/common.scss';  // 公用样式用 scss 编写

/* 引入 npm包 */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware} from 'react-router-redux';

/* 引入经过集成册 reducer */
import mainReducer from './reducers/mainReducer';

/* 引入路由相关的 container */
import App from './containers/App';
import Index from './containers/Index';
import Print from './containers/Print';
import Library from './containers/Library';
import Dev from './containers/Dev';
import User from './containers/User';
import AppleBasket from './containers/AppleBasket';

import Library_Index from './containers/library/index';

import ComContainer from './containers/ComContainer';


/* 初始化一个 store */
let historyType = hashHistory;
let logger = createLogger({
  duration: true
});
let router = routerMiddleware(historyType);
let store = createStore(
  mainReducer,
  applyMiddleware(router, thunk, promise, logger)
);
let historyWithStore = syncHistoryWithStore(historyType, store);

/* 定义应用路由，并渲染 */
ReactDOM.render(
  <Provider store={store}>
	  <Router history={historyWithStore}>
      <Redirect from="/" to="/index" />
      <Route path="/" component={App} >
        <Route path="index" component={Index} />
        <Route path="print" component={Print} />
        <Route path="library" component={Library}>
          <IndexRoute component={Library_Index} />
        </Route>
        <Route path="dev" component={Dev}>
          <Route path=":comName" component={ComContainer} />
        </Route>
        <Route path="apple" component={AppleBasket} />
        <Route path="user" component={User} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
