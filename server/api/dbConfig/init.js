const { Pool } = require("pg");

const pool = new Pool({ database: 'stories', user: 'postgres' });

module.exports = pool;