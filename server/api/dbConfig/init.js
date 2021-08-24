const { Pool } = require("pg");

const pool = new Pool({
    user: 'localhost',
    host: 'database.server.com',
    database: 'storyDatabase',
    password: 'secretpassword',
    port: 5432,
});

module.exports = pool;