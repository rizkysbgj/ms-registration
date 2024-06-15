const createError = require('http-errors')
const jwt = require('jsonwebtoken');

class UserConnector {
  constructor(options) {
    Object.assign(this, options);
  }

  async createUser(payload) {
    const url = '/users'

    const user = await this.client.post(url, payload, {});
    
    return user;
  }
}

module.exports = UserConnector;
