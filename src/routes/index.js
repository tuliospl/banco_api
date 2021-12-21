const express = require('express');
const userRouter = require('./userRouter');
const loginRouter = require('./loginRouter');
const depositRouter = require('./depositRouter');
const transferRouter = require('./transferRouter');

const rootRouter = express.Router();

rootRouter.use('/createUser', userRouter);

rootRouter.use('/login', loginRouter);

rootRouter.use('/deposit', depositRouter);

rootRouter.use('/transfer', transferRouter);

module.exports = rootRouter;
