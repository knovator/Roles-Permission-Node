require('./db');
const initSeed = require('./seeder/index');
initSeed();
module.exports = require('./lib');