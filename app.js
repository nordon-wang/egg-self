/* eslint-disable no-unused-vars */
'use strict';

class AppBootHook {
  constructor(app) {
    app.once('server', server => {
      console.log('server 服务启动了');

    });
  }
  /**
   * 在配置加载之前的一个hook
   * 在这里是最后一次机会修改 配置文件
   * 业务场景：可以在这里将一些配置项进行处理，例如将mysql的密码进行解密，防止被别人看到
   */
  configWillLoad() {
    console.log('生命周期: configWillLoad');
  }

  /**
   * 配置加载完成，配置已经稳定
   * 业务场景：可以获取完整的配置文件，进行一些处理，例如运行一些第三方的服务
   */
  async didLoad() {
    console.log('生命周期: configDidLoad');
  }

  /**
   * 所有插件已经加载完成，应用整体还没ready， 类似 componentWillMount
   * 业务场景：可以先初始化一些数据
   */
  async willReady() {
    console.log('生命周期: willReady');
  }

  /**
   * 应用启动完成
   * 业务场景：请求之外创建ctx， createAnonymousContext()
   */
  async didReady() {
    console.log('生命周期: didReady');
  }

  /**
   * http 服务启动完成
   */
  async serverDidReady() {
    console.log('生命周期: serverDidReady');
  }
}

module.exports = AppBootHook;
