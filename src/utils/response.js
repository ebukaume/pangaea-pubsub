const { logger } = require('./logger');
const { ERROR, RESPONSE_CODE } = require('./constant');

const notFound = (res, message) => (
  res.status(404).json({
    ...RESPONSE_CODE.FAILURE,
    error: ERROR.NOT_FOUND,
    detail: message,
  })
);

const badRequest = (res, message) => (
  res.status(400).json({
    ...RESPONSE_CODE.FAILURE,
    error: ERROR.VALIDATION_ERROR,
    detail: message,
  })
);

const ok = (res, response) => (
  res.status(200).json({
    ...response,
  })
);

const internalServerError = (req, res, error) => {
  const errorMessage = error.message || error;

  logger.error({
    error: ERROR.INTERNAL_SERVER_ERROR,
    source: req.ip,
    message: errorMessage,
    stack: error.stack,
  });

  return res.status(500).json({
    ...RESPONSE_CODE.FAILURE,
    error: ERROR.INTERNAL_SERVER_ERROR,
    detail: errorMessage,
  });
};

module.exports = {
  ok,
  notFound,
  badRequest,
  internalServerError,
};
