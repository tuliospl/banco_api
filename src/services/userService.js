const createNewUser = require('../models/userModel');

const createUserService = async (name, cpf) => {
  const response = await createNewUser(name, cpf);

  return response;
};

module.exports = createUserService;
