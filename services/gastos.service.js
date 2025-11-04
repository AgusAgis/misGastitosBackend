// services/gastos.service.js

const gastosModel = require('../data/gastos.model'); // Importa la capa de Persistencia

/**
 * Servicio para obtener todos los gastos realizados.
 */
const getAllGastos = () => {
    return gastosModel.findAll();
};

/**
 * Servicio para obtener un gasto por ID.
 */
const getGastoById = (id) => {
    return gastosModel.findById(id);
};

/**
 * Servicio para agregar un nuevo gasto (incluye validación de negocio).
 */
const addGasto = (data) => {
    if (!data.titulo || !data.monto || !data.fecha) {
        // Lanza un error que será capturado por el controlador
        throw new Error("Datos incompletos. Se requieren titulo, monto y fecha.");
    }

    return gastosModel.save(data);
};

/**
 * Servicio para actualizar un gasto por ID.
 */
const updateGasto = (id, data) => {
    // Si necesitas validaciones de negocio antes de la actualización, irían aquí.
    return gastosModel.update(id, data);
};

/**
 * Servicio para borrar un gasto por ID.
 */
const deleteGasto = (id) => {
    return gastosModel.remove(id);
};

module.exports = {
    getAllGastos,
    getGastoById,
    addGasto,
    updateGasto,
    deleteGasto
};