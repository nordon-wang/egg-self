/*
 * @Author: nordon-wang
 * @Date: 2019-08-22 22:33:31
 * @Description: 中间件
 * @Email:
 */

'use strict';
module.exports = options => {
  console.log('options', options);

  return async function log(ctx, next) {
    console.log('我的日志中间件');
    await next();
  };
};

