'use strict';

import baseConfig from './base';

let config = {
  appEnv: 'test',  // don't remove the appEnv property here
  host: '' // NOTE: 测试时，记得在此添加测试的主机名
};

export default Object.freeze(Object.assign(baseConfig, config));
