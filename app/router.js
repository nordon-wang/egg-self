/*
 * @Author: nordon-wang
 * @Date: 2019-08-21 23:07:09
 * @Description:
 * @Email:
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/hello', controller.home.hello);
  router.resources('/api/user', controller.user);
  router.get('/redirect', controller.home.redirect);
  router.get('/price/book', controller.price.book.getBook);
  router.get('/services', controller.home.getData);
};

