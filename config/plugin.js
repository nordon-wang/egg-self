/* eslint-disable eggache/no-unexpected-plugin-keys */
/*
 * @Author: nordon-wang
 * @Date: 2019-08-21 23:07:09
 * @Description:
 * @Email:
 */
'use strict';
const path = require('path');

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },
  a: { // 如果不配置依赖关系，按照引入顺序加载， a -- b
    enable: true,
    package: 'egg-a',
    path: path.resolve(__dirname, '../app/lib/plugin/egg-a'),
    dependencies: [ 'pluginB' ], // 配置依赖关系，会先加载依赖项， b -- a
  },
  pluginB: {
    enable: true,
    package: 'egg-b',
    path: path.join(__dirname, '../app/lib/plugin/egg-b'),
  },
};

// exports.nunjucks = {
//   enable: true,
//   package: 'egg-view-nunjucks',
// };
