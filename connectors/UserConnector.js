class UserConnector {
  constructor(options) {
    Object.assign(this, options);
  }

  async createUser(payload) {
    const url = '/users'

    const { data } = await this.client.post(url, payload, {});
    
    return data;
  }
}

module.exports = UserConnector;
