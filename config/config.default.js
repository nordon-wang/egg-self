/*
 * @Author: nordon-wang
 * @Date: 2019-08-21 23:07:09
 * @Description:
 * @Email:
 */
/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};


  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1566400009717_5612';

  // add your middleware config here
  config.middleware = [
    'log', // middleware 中的 文件名
  ];

  // 白名单
  config.security = {
    domainWhiteList: [ '.baidu.com' ], // 安全白名单，以 . 开头
  };

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.nj': 'nunjucks',
    },
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
