const { chunk, isEmpty } = require('lodash');
const { cache } = require('../repository/cache');
const { getCacheKey, sendMessageToClient } = require('../utils');
const { RESPONSE, PUBLICATION_CHUNK_SIZE } = require('../utils/constant');
const { logger } = require('../utils/logger');

const publishToSubscribers = async ({ topic, data }) => {
  try {
    const key = getCacheKey(topic);
    const subscribers = await cache.smembersAsync(key);

    if (isEmpty(subscribers)) return RESPONSE.SUCCESS;

    const batches = chunk(subscribers, PUBLICATION_CHUNK_SIZE);
    const publishPromises = batches
      .map((batch) => batch.map((url) => sendMessageToClient({ url, data })));

    for (let batch = 0; batch < publishPromises.length; batch++) {
      await Promise.all(publishPromises[batch]);
    }

    return RESPONSE.SUCCESS;
  } catch (error) {
    const detail = `Message to some subscribers failed! Reason: ${error.message}`;
    
    logger.error(detail);

    return {
      ...RESPONSE.FAILURE,
      detail,
    };
  }
};

module.exports = {
  publishToSubscribers,
};
