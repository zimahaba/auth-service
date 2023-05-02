const { Client } = require('pg');

const client = new Client({
  user: 'pfmadmin',
  database: 'pfmanager',
  password: 'pfmadmin',
  port: '5432',
  host: 'localhost'
});

module.exports = { client };