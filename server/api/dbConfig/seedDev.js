const db = require('./init');
const fs = require('fs');

async function connectdb() {
    const firstSeed = fs.readFileSync(__dirname + '/storyDatabase.sql').toString();


    await db.query(firstSeed);

    const seeds = fs.readFileSync(__dirname + '/seed.sql').toString();
    console.log(seeds)

    await db.query(seeds)
};
connectdb();