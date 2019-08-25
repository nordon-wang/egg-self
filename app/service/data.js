'use strict';

const Service = require('egg').Service;

class DataService extends Service {
  async index() {
    // 从databases读取数据
    return [{
      name: 'nordon',
      age: 12,
    }, {
      name: 'jack',
      age: 18,
    }];
  }
}

module.exports = DataService;
