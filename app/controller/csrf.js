'use strict';

const Controller = require('egg').Controller;

class csrfController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'csrf';
  }
}

module.exports = csrfController;
