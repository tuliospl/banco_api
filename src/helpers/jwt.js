require('dotenv').config();
const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET_KEY;

const jwtConfig = {
  expiresIn: '2h',
  algorithm: 'HS256',
};

const generateJWT = (payload) => jwt.sign(payload, jwtSecret, jwtConfig);

const validateToken = (token) => jwt.verify(token, jwtSecret, jwtConfig);

module.exports = {
  generateJWT,
  validateToken,
};
