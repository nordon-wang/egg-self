'use strict';

const Controller = require('egg').Controller;

class bookController extends Controller {
  async getBook() {
    const { ctx } = this;
    ctx.body = '获取book';
  }
}


module.exports = bookController;
