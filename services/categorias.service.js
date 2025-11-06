// services/categorias.service.js

const categoriaModel = require('../data/categorias.model'); // Importa la capa de Persistencia

/**
 * Servicio para obtener todas las categoria realizados.
 */
const getAllCategorias = () => {
    return categoriaModel.findAll();
};

/**
 * Servicio para obtener una categoria por ID.
 */
const getCategoriaById = (id) => {
    return categoriaModel.findById(id);
};

/**
 * Servicio para agregar una nueva Categoria (incluye validación de negocio).
 */
const addCategoria = (data) => {
    if (!data.titulo || !data.imagen) {
        // Lanza un error que será capturado por el controlador
        throw new Error("Datos incompletos. Se requieren titulo e imagen.");
    }

    return categoriaModel.save(data);
};

/**
 * Servicio para actualizar una categoria por ID.
 */
const updateCategoria = (id, data) => {
    // Si necesitas validaciones de negocio antes de la actualización, irían aquí.
    return categoriaModel.update(id, data);
};

/**
 * Servicio para borrar un Categoria por ID.
 */
const deleteCategoria = (id) => {
    return categoriaModel.remove(id);
};

module.exports = {
    getAllCategorias,
    getCategoriaById,
    addCategoria,
    updateCategoria,
    deleteCategoria
};