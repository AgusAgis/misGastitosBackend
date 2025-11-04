// routes/libro.routes.js

const express = require('express');
const router = express.Router();
const libroController = require('../controllers/libro.controller'); // Importa el Controlador

// Rutas para /libros
router.get('/', libroController.getLibros);      // GET /libros
router.post('/', libroController.createLibro);    // POST /libros

// Rutas para /libros/:id
router.get('/:id', libroController.getLibro);    // GET /libros/:id
router.put('/:id', libroController.updateLibroController); // PUT /libros/:id
router.delete('/:id', libroController.deleteLibroController); // DELETE /libros/:id

module.exports = router;