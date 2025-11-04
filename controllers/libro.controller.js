// controllers/libro.controller.js

const libroService = require('../services/libro.service'); // Importa la capa de Servicio

/**
 * Handler para GET /libros - Obtiene todos los libros.
 */
const getLibros = (req, res) => {
    const allLibros = libroService.getAllLibros();
    res.json(allLibros);
};

/**
 * Handler para GET /libros/:id - Obtiene un libro por su ID.
 */
const getLibro = (req, res) => {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({ error: 'ID inválido' });
    }

    const libro = libroService.getLibroById(id);

    if (libro) {
        res.json(libro);
    } else {
        res.status(404).json({ error: 'Libro no encontrado' });
    }
};

/**
 * Handler para POST /libros - Incorpora un nuevo libro.
 */
const createLibro = (req, res) => {
    try {
        const newLibro = libroService.addLibro(req.body);
        res.status(201).json(newLibro);
    } catch (error) {
        // Captura el error de validación lanzado por el servicio
        res.status(400).json({ error: error.message });
    }
};

/**
 * Handler para PUT /libros/:id - Actualiza un libro por su ID.
 */
const updateLibroController = (req, res) => {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({ error: 'ID inválido' });
    }
    
    const updatedLibro = libroService.updateLibro(id, req.body);

    if (updatedLibro) {
        res.json(updatedLibro);
    } else {
        res.status(404).json({ error: 'Libro no encontrado para actualizar' });
    }
};

/**
 * Handler para DELETE /libros/:id - Borra un libro por su ID.
 */
const deleteLibroController = (req, res) => {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({ error: 'ID inválido' });
    }

    const wasDeleted = libroService.deleteLibro(id);

    if (wasDeleted) {
        res.status(204).send(); 
    } else {
        res.status(404).json({ error: 'Libro no encontrado para borrar' });
    }
};

module.exports = {
    getLibros,
    getLibro,
    createLibro,
    updateLibroController,
    deleteLibroController
};