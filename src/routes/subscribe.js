const { Router } = require('express');
const { subscribe } = require('../controllers/subscribe');
const { validateSubscriptionRequest } = require('../middleware/validation');

const subscribeRouter = new Router();

subscribeRouter.post('/:topic', validateSubscriptionRequest, subscribe);

module.exports = {
  subscribeRouter,
};
