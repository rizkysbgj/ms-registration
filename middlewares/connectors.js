const axios = require('axios');

const { UserConnector } = require('../connectors')
const config = require('../config');

const { services: { user } } = config;

const connectors = (req, res, next) => {
  const userConnectorClient = axios.create({ baseUrl: user.baseUrl, headers: {} });
  const userConnector = new UserConnector({ client: userConnectorClient });

  Object.assign(res.locals, {
    userConnector
  });

  next();
}

module.exports = [connectors];
