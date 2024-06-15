const { RegistrationService, OtpService } = require('../services');

const services = (req, res, next) => {
  const { locals: { userRepository, otpRepository, userConnector }} = res;

  const otpService = new OtpService({ otpRepository });

  const registrationService = new RegistrationService({ userConnector });

  Object.assign(res.locals, {
    otpService,
    registrationService
  });

  next();
}

module.exports = [services];
