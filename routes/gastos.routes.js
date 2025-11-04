// routes/gastos.routes.js

const express = require('express');
const router = express.Router();
const gastosController = require('../controllers/gastos.controller'); // Importa el Controlador

// Rutas para /gastos
router.get('/', gastosController.getGastos);      // GET /gastos
router.post('/', gastosController.createGasto);    // POST /gastos

// Rutas para /gastos/:id
router.get('/:id', gastosController.getGasto);    // GET /gastos/:id
router.put('/:id', gastosController.updateGastoController); // PUT /gastos/:id
router.delete('/:id', gastosController.deleteGastoController); // DELETE /gastos/:id

module.exports = router;