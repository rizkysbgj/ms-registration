const express = require('express');
const router = express.Router();
const { registrationHandler } = require('./handler')

router.post(
  '/registrations', 
  registrationHandler
);

module.exports = router;