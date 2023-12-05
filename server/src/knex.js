const config = require('../knexfile');
require('dotenv').config();

const environment = process.env.NODE_ENV;
console.log('environment : ', environment);
console.log('pg-content : ', config[environment]);
const knex = require('knex')(config[environment]);

module.exports = knex;
