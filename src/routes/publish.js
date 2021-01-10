const { Router } = require('express');
const { publish } = require('../controllers/publish');
const { validatePublishRequest } = require('../middleware/validation');

const publishRouter = new Router();

publishRouter.post('/:topic', validatePublishRequest, publish);

module.exports = {
  publishRouter,
};
