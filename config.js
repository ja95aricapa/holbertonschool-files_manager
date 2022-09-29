const dotenv = require('dotenv').config();

module.exports = {
  DB_HOST: process.env.DB_HOST || '127.0.0.1',
  DB_PORT: process.env.DB_PORT || 27017,
  DB_DATABASE: process.env.DB_DATABASE || 'files_manager',
  PORT: process.env.PORT || 5000
}

