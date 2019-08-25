/*
 * @Author: nordon-wang
 * @Date: 2019-08-21 23:07:09
 * @Description: 路由控制层
 * @Email:
 */
'use strict';

// const Controller = require('egg').Controller;
const HttpController = require('./base/http');

class HomeController extends HttpController {
  async index() {
    const { ctx, app: {
      authName,
      config: {
        env,
      },
    } } = this;
    console.log('看看插件 A 的方法,pluginA:', ctx.pluginA);
    console.log('看看插件 B 的方法,pluginB:', ctx.pluginB);

    ctx.body = ctx.helper.getData() +
      '----' + ctx.isIOS +
      '---' + authName +
      '---' + ctx.app.authName +
      '---' + env;
    // ctx.body = ctx.isIOS;
  }

  async hello() {
    // const { ctx } = this;
    // await ctx.render('hello.nj'); // 自动读取 view下面的 hello.nj
    await this.success({
      user_id: '123a',
    });
  }

  async redirect() {
    const { ctx } = this;
    ctx.redirect('https://baidu.com');
  }

  async getData() {
    const { ctx } = this;
    const data = await this.service.data.index();
    ctx.body = data;
  }
}

module.exports = HomeController;
