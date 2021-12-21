const getByCpf = require('../models/loginModel');

const checksByCpf = async (cpf) => {
  const queryCpf = await getByCpf(cpf);

  return queryCpf;
};

module.exports = checksByCpf;
