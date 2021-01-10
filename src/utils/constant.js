const ERROR = {
  NOT_FOUND: 'NOT_FOUND',
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR',
  NO_SUBSCRIBER: 'NO SUBSCRIBER!',
};

const RESPONSE_CODE = {
  FAILURE: {
    code: 0,
    message: 'Failure',
  },
  SUCCESS: {
    code: 1,
    message: 'Success',
  },
};

const PUBLICATION_CHUNK_SIZE = 10;

module.exports = {
  ERROR,
  RESPONSE_CODE,
  PUBLICATION_CHUNK_SIZE,
};
