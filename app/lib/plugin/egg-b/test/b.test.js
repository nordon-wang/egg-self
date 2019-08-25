'use strict';

const mock = require('egg-mock');

describe('test/b.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/b-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, b')
      .expect(200);
  });
});
