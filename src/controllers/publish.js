const { publishToSubscribers } = require('../services/publish');
const { ok, internalServerError } = require('../utils/response');

const publish = async (req, res) => {
  try {
    const { topic } = req.params;

    const publicationResult = await publishToSubscribers({ topic, data: req.body });

    return ok(res, publicationResult);
  } catch (err) {
    return internalServerError(req, res, err);
  }
};

module.exports = {
  publish,
};
