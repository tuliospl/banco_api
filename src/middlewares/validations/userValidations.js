const error = require('../../schemas/responseErrors');
const getByCpf = require('../../helpers/getByCpf');

const validateName = (req, _res, next) => {
  const { name } = req.body;

  if (!name) return next(error.user.requiredName);

  if (name.length < 8) return next(error.user.invalidNameLength);

  return next();
};

// Regex do cpf https://pt.stackoverflow.com/questions/11045/express%C3%A3o-regular-para-validar-um-campo-que-aceita-cpf-ou-cnpj
const validateCpf = async (req, _res, next) => {
  const { cpf } = req.body;
  const regexCpf = /^([0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2})$/;

  if (!cpf) return next(error.user.requiredCpf);

  if (!regexCpf.test(cpf)) return next(error.user.invalidCpf);

  const verifyCpf = await getByCpf(cpf);

  if (!verifyCpf) return next();

  return next(error.user.alreadyExists);
};

module.exports = {
  validateName,
  validateCpf,
};
