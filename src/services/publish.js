const { chunk, isEmpty } = require('lodash');
const { cache } = require('../repository/cache');
const { getCacheKey, sendMessageToClient } = require('../utils');
const { RESPONSE_CODE, PUBLICATION_CHUNK_SIZE, ERROR } = require('../utils/constant');

const publishToSubscribers = async ({ topic, data }) => {
  try {
    const key = getCacheKey(topic);
    const subscribers = await cache.smembersAsync(key);

    if (isEmpty(subscribers)) return RESPONSE_CODE.SUCCESS;

    const batches = chunk(subscribers, PUBLICATION_CHUNK_SIZE);
    const publishProminses = batches
      .map((batch) => batch.map((url) => sendMessageToClient({ url, data })));

    await Promise.all(...publishProminses);

    return RESPONSE_CODE.SUCCESS;
  } catch (error) {
    return {
      ...RESPONSE_CODE.FAILURE,
      detail: error,
    };
  }
};

module.exports = {
  publishToSubscribers,
};
