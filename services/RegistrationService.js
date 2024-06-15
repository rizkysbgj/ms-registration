class RegistrationService {
  constructor(options) {
    Object.assign(this, options);
  }

  async registerUser(payload) {
    const { email, phoneNumber } = payload;

    try {
      const createdUser = await this.userConnector.createUser(payload);

      return createdUser;
    } catch (error) {
      console.log(error, 'failed to register user');

      throw error;
    }
  }
}

module.exports = RegistrationService;
