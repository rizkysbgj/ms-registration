class RegistrationService {
  constructor(options) {
    Object.assign(this, options);
  }

  _constructRegistrationPayload(payload) {
    const { 
      corporateAccountNumber,
      corporateName,
      userId,
      userName,
      role,
      phoneNumber,
      email,
      password
     } = payload;

     return {
      corporateAccountNumber,
      corporateName,
      userId,
      userName,
      role,
      phoneNumber,
      email,
      password
     };
  }

  async registerUser(payload) {
    const { email, phoneNumber, otp } = payload;

    try {
      const otpPayload = {
        email,
        otp
      }
      await this.otpService.validateOtp(otpPayload);

      const registrationPayload = this._constructRegistrationPayload(payload);
      const createdUser = await this.userConnector.createUser(registrationPayload);

      return createdUser;
    } catch (error) {
      console.log(error, 'failed to register user');

      throw error;
    }
  }
}

module.exports = RegistrationService;
