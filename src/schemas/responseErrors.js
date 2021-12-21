const status = require('./errorCodes');

module.exports = {
  user: {
    requiredName: {
      statusCode: status.badRequest,
      message: '"name" is required',
    },

    invalidNameLength: {
      statusCode: status.badRequest,
      message: '"displayName" length must be at least 8 characters long',
    },

    requiredCpf: {
      statusCode: status.badRequest,
      message: '"cpf" is required',
    },

    invalidCpf: {
      statusCode: status.badRequest,
      message: '"cpf" must be a valid cpf',
    },

    alreadyExists: {
      statusCode: status.conflict,
      message: 'User already registered',
    },
  },

  login: {
    requiredCpf: {
      statusCode: status.badRequest,
      message: '"cpf" is required',
    },
    notExistent: {
      statusCode: status.badRequest,
      message: 'User does not exist',
    },
  },

  token: {
    expired: {
      statusCode: status.unauthorized,
      message: 'Expired or invalid token',
    },

    notExistent: {
      statusCode: status.unauthorized,
      message: 'Token not found',
    },
  },

  deposit: {
    notExistent: {
      statusCode: status.badRequest,
      message: 'User does not exist',
    },
    negativeValue: {
      statusCode: status.badRequest,
      message: 'The value must be greater than zero',
    },
    maximumDeposit: {
      statusCode: status.badRequest,
      message: 'The value must be a maximum of 2000',
    },
  },

  transfer: {
    notExistent: {
      statusCode: status.badRequest,
      message: 'User does not exist',
    },
    insufficientFunds: {
      statusCode: status.badRequest,
      message: 'Insufficient funds',
    },
    negativeValue: {
      statusCode: status.badRequest,
      message: 'The value must be greater than zero',
    },
    seviceOff: {
      statusCode: status.conflict,
      message: 'service momentarily unavailable',
    },
  },

};
