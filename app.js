// app.js (Archivo principal)

// Importamos Express
const express = require('express');
const app = express();
const port = 8080;

// Importamos las rutas de libros
const libroRoutes = require('./routes/libro.routes');

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

// Usamos el router de libros para todas las peticiones que empiecen con '/libros'
app.use('/libros', libroRoutes);


// Inicialización del servidor
app.listen(port, () => {
    console.log(`Servidor de Libros escuchando en http://localhost:${port}`);
    console.log(`Rutas disponibles:
    GET /libros
    GET /libros/:id
    POST /libros (usar index.html o Postman con JSON)
    PUT /libros/:id (usar Postman)
    DELETE /libros/:id (usar Postman)`);
});