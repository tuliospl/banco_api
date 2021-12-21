const responseErrors = require('../../schemas/responseErrors');

const validateCpf = (req, _res, next) => {
  const { cpf } = req.body;

  if (!cpf) return next(responseErrors.login.requiredCpf);

  return next();
};

module.exports = validateCpf;
