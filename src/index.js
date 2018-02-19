if (process.env.NODE_ENV !== "production") require("dotenv").config();
const Koa = require("koa");
const db = require("./db");
const User = require("./db/models/user");

const app = new Koa();

const { APP_PORT } = process.env;

app.use(async ctx => {});

app.listen(APP_PORT);
