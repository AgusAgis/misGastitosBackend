// services/libro.service.js

const libroModel = require('../data/libro.model'); // Importa la capa de Persistencia

/**
 * Servicio para obtener todos los libros.
 */
const getAllLibros = () => {
    return libroModel.findAll();
};

/**
 * Servicio para obtener un libro por ID.
 */
const getLibroById = (id) => {
    return libroModel.findById(id);
};

/**
 * Servicio para agregar un nuevo libro (incluye validación de negocio).
 */
const addLibro = (data) => {
    if (!data.titulo || !data.autor || !data.año) {
        // Lanza un error que será capturado por el controlador
        throw new Error("Datos incompletos. Se requieren titulo, autor y año.");
    }
    
    // Aquí podrías agregar más lógica de negocio, como verificar si el libro ya existe
    
    return libroModel.save(data);
};

/**
 * Servicio para actualizar un libro por ID.
 */
const updateLibro = (id, data) => {
    // Si necesitas validaciones de negocio antes de la actualización, irían aquí.
    return libroModel.update(id, data);
};

/**
 * Servicio para borrar un libro por ID.
 */
const deleteLibro = (id) => {
    return libroModel.remove(id);
};

module.exports = {
    getAllLibros,
    getLibroById,
    addLibro,
    updateLibro,
    deleteLibro
};