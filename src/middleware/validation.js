const joi = require('joi');
const { badRequest } = require('../utils/response');

const isStrictURL = (value) => {
  const { href } = new URL(value);

  if (href !== value) throw new Error('of invalid protocol format!"');

  return value;
};

const publishBodySchema = joi.object().keys({}).required().unknown(true);

const subscriptionBodySchema = joi.object({
  url: joi.string().uri().custom(isStrictURL).required(),
});

const validateSubscriptionRequest = async (req, res, next) => {
  try {
    await subscriptionBodySchema.validateAsync(req.body);

    return next();
  } catch (err) {
    return badRequest(res, err.message);
  }
};

const validatePublishRequest = async (req, res, next) => {
  try {
    await publishBodySchema.validateAsync(req.body);

    return next();
  } catch (err) {
    return badRequest(res, err.message);
  }
};

module.exports = {
  validateSubscriptionRequest,
  validatePublishRequest,
};
