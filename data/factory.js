// data/factory.js
const { MODO_PERSISTENCIA } = require('../config');

let GastosDAO;
let CategoriasDAO;

// Según el modo de persistencia, carga el DAO correspondiente
switch (MODO_PERSISTENCIA) {
    case 'MONGODB':
        GastosDAO = require('./gastos.mongodb.dao.js');
        CategoriasDAO = require('./categorias.mongodb.dao.js');
        console.log('Persistencia: MongoDB');
        break;
    case 'MEM':
    default:
        GastosDAO = require('./gastos.mem.dao.js');
        CategoriasDAO = require('./categorias.mem.dao.js');
        console.log('Persistencia: Memoria (default)');
        break;
}

module.exports = {
    GastosDAO,
    CategoriasDAO
};