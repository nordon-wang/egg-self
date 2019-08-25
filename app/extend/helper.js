/*
 * @Author: nordon-wang
 * @Date: 2019-08-22 22:24:42
 * @Description: 扩展，就是编写一些公用的方法, 在这个文件夹 exports的方法，
 *  都会自动的在模板引擎中注入在 helper对象上, 在ctx上也可以拿到
 * @Email:
 */
'use strict';

exports.getData = () => {
  return Date.now();
};
