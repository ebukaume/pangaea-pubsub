const redis = require('redis');
const { promisifyAll } = require('bluebird');
const { logger } = require('../utils/logger');

const Redis = promisifyAll(redis);

const client = Redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
});

process.on('SIGINT', () => client.quit());

client.once('connect', () => logger.info('Redis connection established!'));
client.on('error', (err) => logger.error(`Redis connection error: ${err}`));
client.on('reconnecting', () => logger.warn('Retrying redis connection...'));
client.on('end', () => logger.warn('Redis connection closed!'));

module.exports = {
  cache: client,
};
