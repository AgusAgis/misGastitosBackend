// routes/gastos.routes.js

const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categorias.controller'); // Importa el Controlador

// Rutas para /categorias
router.get('/', categoriaController.getCategoriasController);      // GET /categorias
router.post('/', categoriaController.createCategoriaController);    // POST /categorias

// Rutas para /categorias/:id
router.get('/:id', categoriaController.getCategoriaController);    // GET /categorias/:id
router.put('/:id', categoriaController.updateCategoriaController); // PUT /categorias/:id
router.delete('/:id', categoriaController.deleteCategoriaController); // DELETE /categorias/:id

module.exports = router;