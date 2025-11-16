// db/schemas/categoria.schema.js
const mongoose = require('mongoose');

const categoriaSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    imagen: { type: String, required: true }
});

const CategoriaModel = mongoose.model('categorias', categoriaSchema);

module.exports = CategoriaModel;