const errors = require('../../schemas/responseErrors');
const getByCpf = require('../../helpers/getByCpf');

const validateCpf = async (req, _res, next) => {
  const { cpf } = req.body;

  const verifyCpf = await getByCpf(cpf);

  if (!verifyCpf) return next(errors.deposit.notExistent);

  return next();
};

const validateMoney = (req, _res, next) => {
  const { money } = req.body;

  if (money > 2000) return next(errors.deposit.maximumDeposit);

  if (money < 1) return next(errors.deposit.negativeValue);

  return next();
};

module.exports = {
  validateCpf,
  validateMoney,
};
