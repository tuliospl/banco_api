const express = require('express');

const transferRouter = express.Router();

const transferController = require('../controllers/transferController');

const { validateCpfs, validateBalance } = require('../middlewares/validations/transferValidations');

transferRouter.post('/', validateCpfs, validateBalance, transferController);

module.exports = transferRouter;
