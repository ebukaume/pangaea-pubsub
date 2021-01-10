const express = require('express');
const dotenv = require('dotenv');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');
const morgan = require('morgan');
const { logger } = require('./utils/logger');
const { startServer } = require('./server');

dotenv.config();

const requiredEnvironmentVariables = [
  'REDIS_HOST',
  'REDIS_PORT',
];

requiredEnvironmentVariables.forEach((environmentVariable) => {
  if (!process.env[environmentVariable]) {
    logger.error(`Missing required environment variable ${environmentVariable}`);
    process.exit(0);
  }
});

const app = express();

app.use(cors());
app.set('trust proxy', true);

if (process.env.NODE_ENV === 'production') {
  app.use(helmet());
  app.use(compression());
  app.use(morgan('combined'), { stream: { write: (message) => logger.info(message) } });
} else {
  app.use(morgan('dev'));
}

app.use(express.json());

startServer(app)
  .catch((err) => logger.error(err));
