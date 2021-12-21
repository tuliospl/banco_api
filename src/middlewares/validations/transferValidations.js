const getByCpf = require('../../helpers/getByCpf');
const errors = require('../../schemas/responseErrors');

const validateCpfs = async (req, _res, next) => {
  const { cpf, cpfTransfer } = req.body;

  const sender = await getByCpf(cpf);

  const receiver = await getByCpf(cpfTransfer);

  if (!sender || !receiver) next(errors.transfer.notExistent);

  return next();
};

const validateBalance = async (req, _res, next) => {
  const { cpf, money } = req.body;

  const { balance } = await getByCpf(cpf);

  if (balance - money < 0) next(errors.transfer.insufficientFunds);

  if (money <= 0) next(errors.transfer.negativeValue);

  return next();
};

module.exports = {
  validateCpfs,
  validateBalance,
};
