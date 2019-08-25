/*
 * @Author: nordon-wang
 * @Date: 2019-08-25 12:43:49
 * @Description:
 * @Email:
 */

/* eslint valid-jsdoc: "off" */

'use strict';

module.exports = appInfo => {
  const config = exports = {};


  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1566400009717_5612';

  // add your middleware config here
  config.middleware = [
    'log', // middleware 中的 文件名
  ];

  config.log = {
    content: '从配置来的',
  };


  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
