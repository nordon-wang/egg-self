/* eslint-disable no-unused-vars */


'use strict';
module.exports = app => {

  app.once('server', server => {
    // websocket
    console.log('插件 B 的server启动了');

  });
};
