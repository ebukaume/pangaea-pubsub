const swaggerUi = require('swagger-ui-express');
const { notFound, ok } = require('../utils/response');
const { subscribeRouter } = require('./subscribe');
const { publishRouter } = require('./publish');
const swaggerDocument = require('../../swagger.json');

const API_PREFIX = '/v1';

const bindRoutes = (app) => {
  app.use(`${API_PREFIX}/subscribe`, subscribeRouter);
  app.use(`${API_PREFIX}/publish`, publishRouter);
  app.use(`${API_PREFIX}/status`, (req, res) => ok(res, { status: 'Online' }));

  app.use(`${API_PREFIX}/docs`, swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  app.use((req, res) => notFound(res, 'Oops! Route not found. Please check the docs @ /api/v1/docs'));
};

module.exports = {
  bindRoutes,
};
