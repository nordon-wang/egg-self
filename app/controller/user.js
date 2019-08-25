/*
 * @Author: nordon-wang
 * @Date: 2019-08-25 15:39:54
 * @Description: s
 * @Email:
 */

'use strict';

const Controller = require('egg').Controller;


class UserController extends Controller {
  async index() {
    const { ctx } = this;
    console.log('index', ctx.params);
    console.log('index', ctx.query);

    ctx.body = 'index';
  }

  async show() {
    const { ctx } = this;
    console.log('show', ctx.params);
    console.log('show', ctx.query);

    ctx.body = 'show';
  }

  async new() {
    const { ctx } = this;
    ctx.body = 'new';
  }
}

module.exports = UserController;
