const express = require('express');

const userRouter = express.Router();

const createUserController = require('../controllers/userController');

const { validateName, validateCpf } = require('../middlewares/validations/userValidations');

userRouter.post('/', validateName, validateCpf, createUserController);

module.exports = userRouter;
