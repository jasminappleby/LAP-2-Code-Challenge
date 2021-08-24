const db = require('./init');
const fs = require('fs');

const seeds = fs.readFileSync(__dirname + '/seed.sql').toString();
console.log(seeds)

db.query(seeds, () => console.log('Dev database seeded'));