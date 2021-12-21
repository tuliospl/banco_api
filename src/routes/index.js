const express = require('express');
const userRouter = require('./userRouter');
const loginRouter = require('./loginRouter');

const rootRouter = express.Router();

rootRouter.use('/createUser', userRouter);

rootRouter.use('/login', loginRouter);


module.exports = rootRouter;
