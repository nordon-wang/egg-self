/*
 * @Author: nordon-wang
 * @Date: 2019-08-25 14:06:03
 * @Description:
 * @Email:
 */

'use strict';
module.exports = () => {
  return async function(ctx, next) {
    console.log('gzio');
    await next();

  };
}
;
