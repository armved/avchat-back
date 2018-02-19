/* eslint-disable-next-line global-require */
if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const mongoose = require('mongoose');

// eslint-disable-next-line object-curly-newline
const { DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_NAME } = process.env;

const DB_URL = `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;

class Database {
  constructor() {
    this.connect();
  }

  static connect() {
    mongoose
      .connect(DB_URL)
      .then(() => {
        console.log('Database connection successful');
      })
      .catch(err => {
        console.log(err);
        console.error('Database connection error');
      });
  }
}
module.exports = new Database();
