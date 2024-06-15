const registrationHandler = async (req, res, next) => {
  const {
    body
  } = req;
  const {
    locals: {
      registrationService
    },
  } = res;

  try {
    const createdUser = await registrationService.registerUser(body);
  
    res.send(createdUser);
  } catch (error) {
    next(error);
  }
};

module.exports = {
    registrationHandler
};