// config.js
const dotenv = require('dotenv');
dotenv.config();


module.exports = {
    PORT: process.env.PORT || 8080,
    MODO_PERSISTENCIA: process.env.MODO_PERSISTENCIA || 'MEM',
    STRCNX: process.env.STRCNX || 'mongodb://localhost:27017',
    BASE: process.env.BASE || 'test'
};