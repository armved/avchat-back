// @flow

/* eslint-disable-next-line global-require */
if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const Koa = require('koa');
/* eslint-disable-next-line no-unused-vars */
const db = require('./db');

const app = new Koa();

const { APP_PORT } = process.env;

app.use(async ctx => {});

app.listen(APP_PORT);
