// db/connection.js
const mongoose = require('mongoose');
const { STRCNX, BASE } = require('../config');

const connection = async () => {
    try {
        
        await mongoose.connect(STRCNX, {
            dbName: BASE,            
        });
        console.log('¡Base de datos MongoDB conectada con éxito!');
    } catch (error) {
        console.error('Error al conectar con MongoDB:', error);
        
        process.exit(1); 
    }
};

module.exports = connection;