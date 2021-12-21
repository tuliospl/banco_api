const express = require('express');

const loginRouter = express.Router();

const login = require('../controllers/loginController');

const validateCpf = require('../middlewares/validations/loginValidations');

loginRouter.post('/', validateCpf, login);

module.exports = loginRouter;
