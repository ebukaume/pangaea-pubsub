const axios = require('axios').default;
const { logger } = require('./logger');

const getCacheKey = (suffix) => `subscribers-for-${suffix}`;

const sendMessageToClient = async ({ url, data }) => {
  try {
    await axios({
      method: 'POST',
      url,
      data,
    });
  } catch (err) {
    logger.error(err);
  }
};

const strictTypeOf = (value) => Object.prototype.toString.call(value).slice(8, -1);

module.exports = {
  strictTypeOf,
  getCacheKey,
  sendMessageToClient,
};
