const createUserService = require('../services/userService');
const status = require('../schemas/errorCodes');

const createUserController = async (req, res) => {
  const { name, cpf } = req.body;

  const response = await createUserService(name, cpf);

  return res.status(status.created).json(response);
};

module.exports = createUserController;
