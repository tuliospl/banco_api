const errors = require('../../schemas/responseErrors');
const JWT = require('../../helpers/jwt');
const getByCpf = require('../../helpers/getByCpf');

module.exports = async (req, res, next) => {
  const jwt = req.headers.authorization;

  if (!jwt) {
    const { statusCode, message } = errors.token.notExistent;

    return res.status(statusCode).json({ message });
  }

  const { cpf } = JWT.validateToken(jwt);
  const user = await getByCpf(cpf);

  if (user) return next();
  const { statusCode, message } = errors.token.expired;

  return res.status(statusCode).json({ message });
};
