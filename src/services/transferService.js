const transferModel = require('../models/transferModel');

const transferService = async (cpf, money, cpfTransfer) => {
  const transfer = await transferModel(cpf, money, cpfTransfer);

  return transfer;
};

module.exports = transferService;
