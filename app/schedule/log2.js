'use strict';

const Subscription = require('egg').Subscription;

/**
 * 定时任务的方法名称不能修改 只能是 schedule，subscribe
 * 不需要执行，egg会自动将schedule中的js文件迭代全部执行
 * 文件名不能是 log.1.js
 */
class Log2Subscription extends Subscription {
  static get schedule() { // 配置定时任务
    return {
      interval: '200000s',
      type: 'worker', // all, worker
    };
  }

  async subscribe() {
    console.log('我是定时任务2');

  }
}

module.exports = Log2Subscription;
