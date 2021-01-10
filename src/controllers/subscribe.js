const { subscribeToTopic } = require('../services/subscribe');
const { ok, internalServerError } = require('../utils/response');

const subscribe = async (req, res) => {
  try {
    const { url } = req.body;
    const { topic } = req.params;

    const subscriptionResult = await subscribeToTopic({ topic, url });

    return ok(res, subscriptionResult);
  } catch (err) {
    return internalServerError(req, res, err);
  }
};

module.exports = {
  subscribe,
};
