const checksByCpf = require('../services/loginService');
const status = require('../schemas/errorCodes');
const responseError = require('../schemas/responseErrors');
const { generateJWT } = require('../helpers/jwt');

const login = async (req, res, next) => {
  const { cpf } = req.body;

  const verifyCpf = await checksByCpf(cpf);

  if (verifyCpf) {
    const jwt = await generateJWT({ cpf });

    return res.status(status.ok).json({ dataUser: verifyCpf, jwt });
  }

  return next(responseError.login.notExistent);
};

module.exports = login;
