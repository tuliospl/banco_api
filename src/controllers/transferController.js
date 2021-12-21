const error = require('../schemas/responseErrors');
const status = require('../schemas/errorCodes');
const transferService = require('../services/transferService');

const transferController = async (req, res) => {
  const { cpf, money, cpfTransfer } = req.body;

  const transfer = await transferService(cpf, money, cpfTransfer);

  const { statusCode, message } = error.transfer.seviceOff;

  if (!transfer) return res.status(statusCode).json({ message });

  return res.status(status.ok).json(transfer);
};

module.exports = transferController;
