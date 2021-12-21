require('dotenv').config();

const express = require('express');
const middlewareError = require('./src/middlewares/responseError');
const rootRouter = require('./src/routes');

const app = express();

app.use(express.json());

const { PORT } = process.env;

app.use(rootRouter);

app.use(middlewareError);

app.listen(PORT, () => console.log(`ouvindo a porta ${PORT}!`));
