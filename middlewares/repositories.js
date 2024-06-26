const knex = require('knex');

const { OtpRepository } = require('../repositories')
const config = require('../config');

const repositories = (req, res, next) => {
  const db = knex({
    client: 'mysql2',
    connection: {
      host: config.database.host,
      user: config.database.user,
      password: config.database.password,
      database: config.database.name
    }
  });

  const otpRepository = new OtpRepository({ db, config });

  Object.assign(res.locals, {
    otpRepository
  });

  next();
}

module.exports = [repositories];
