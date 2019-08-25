/* eslint-disable no-unused-vars */
/*
 * @Author: nordon-wang
 * @Date: 2019-08-22 23:25:37
 * @Description:
 * @Email:
 */

'use strict';
module.exports = app => {
  app.authName = 'nordon';

  app.once('server', server => {
    // websocket
    console.log('server');

  });
  app.on('error', (err, ctx) => {
    // report error
    console.log('err, ctx', err, ctx);

  });
  app.on('request', ctx => {
    // log receive request
    console.log('request');

  });
  app.on('response', ctx => {
    // ctx.starttime is set by framework
    // const used = Date.now() - ctx.starttime;
    // log total cost
    console.log('response');

  });
};
