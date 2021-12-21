const express = require('express');
const userRouter = require('./userRouter');
const loginRouter = require('./loginRouter');
const depositRouter = require('./depositRouter');

const rootRouter = express.Router();

rootRouter.use('/createUser', userRouter);

rootRouter.use('/login', loginRouter);

rootRouter.use('/deposit', depositRouter);

module.exports = rootRouter;
