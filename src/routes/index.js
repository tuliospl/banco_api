const express = require('express');
const userRouter = require('./userRouter');

const rootRouter = express.Router();

rootRouter.use('/createUser', userRouter);

module.exports = rootRouter;
