const deposit = require('../models/depositModel');

const depositService = async (cpf, money) => {
  const depositAccount = await deposit(cpf, money);

  const { name } = depositAccount;

  return name;
};

module.exports = depositService;
