// app.js (Archivo principal)

// Importamos Express
const express = require('express');
const app = express();
const port = 8080;

// Importamos las rutas de gastos
const gastosRoutes = require('./routes/gastos.routes');

// Middleware
// Para parsear JSON en el cuerpo de las peticiones (POST, PUT)
app.use(express.json());
// Para parsear datos de formularios (URL-encoded) en el cuerpo de las peticiones
app.use(express.urlencoded({ extended: true }));
// Servir archivos estáticos
app.use(express.static('public'));

// ===============================================
// MONTAJE DE RUTAS
// ===============================================

// Usamos el router de gastos para todas las peticiones que empiecen con '/gastos'
app.use('/gastos', gastosRoutes);


// Inicialización del servidor
app.listen(port, () => {
    console.log(`Servidor de gastos escuchando en http://localhost:${port}`);
    console.log(`Rutas disponibles:
    GET /gastos
    GET /gastos/:id
    POST /gastos 
    PUT /gastos/:id 
    DELETE /gastos/:id`);
});