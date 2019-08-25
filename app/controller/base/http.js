'use strict';

const Controller = require('egg').Controller;

class HttpController extends Controller {
  success(data) {
    this.ctx.body = {
      msg: 'success',
      code: 0,
      data,
    };
  }
}

module.exports = HttpController;
