const express = require('express');

const depositRouter = express.Router();

const depositController = require('../controllers/depositController');

const { validateCpf, validateMoney } = require('../middlewares/validations/depositValidations');

depositRouter.post('/', validateCpf, validateMoney, depositController);

module.exports = depositRouter;
