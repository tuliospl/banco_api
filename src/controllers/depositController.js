const depositService = require('../services/depositService');
const status = require('../schemas/errorCodes');

const depositController = async (req, res) => {
  const { cpf, money } = req.body;

  const deposited = await depositService(cpf, money);

  if (!deposited) return res.status(status.internalServerError).json('Service momentarily unavailable!');

  return res.status(status.ok).json(`Deposit successfully made to the account of ${deposited}`);
};

module.exports = depositController;
