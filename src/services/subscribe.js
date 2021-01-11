const { cache } = require('../repository/cache');
const { getCacheKey } = require('../utils');

const subscribeToTopic = async ({ topic, url }) => {
  const key = getCacheKey(topic);
  
  await cache.saddAsync(key, url);

  return {
    url,
    topic,
  };
};

module.exports = {
  subscribeToTopic,
};
