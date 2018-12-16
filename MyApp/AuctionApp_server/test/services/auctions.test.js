const app = require('../../src/app');

describe('\'auctions\' service', () => {
  it('registered the service', () => {
    const service = app.service('auctions');
    expect(service).toBeTruthy();
  });
});
