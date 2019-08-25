'use strict';

const Subscription = require('egg').Subscription;

class LogSubscription extends Subscription{
  static get schedule(){ // 配置定时任务
    return {
      interval: '3s',
      type: 'worker' // all, worker
    }
  }

  async subscribe(){
    console.log('我是定时任务');
    
  }
}

module.exports = LogSubscription;
