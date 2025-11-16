// data/categorias.mongodb.dao.js
const CategoriaModel = require('../db/schemas/categoria.schema');

const findAll = async () => {
    return CategoriaModel.find().lean();
};

const findById = async (id) => {
    return CategoriaModel.findById(id).lean();
};

const save = async (data) => {
    const newCategoria = new CategoriaModel(data);
    await newCategoria.save();
    return newCategoria.toObject();
};

const update = async (id, data) => {
    return CategoriaModel.findByIdAndUpdate(id, data, { new: true }).lean();
};

const remove = async (id) => {
    const result = await CategoriaModel.findByIdAndDelete(id);
    return !!result;
};

module.exports = {
    findAll,
    findById,
    save,
    update,
    remove
};