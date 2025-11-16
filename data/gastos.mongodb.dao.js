// data/gastos.mongodb.dao.js
const GastoModel = require('../db/schemas/gasto.schema');

// Mongoose usa 'async/await' para todas sus operaciones
const findAll = async () => {
    // .lean() devuelve objetos JS planos, no documentos de Mongoose
    return GastoModel.find().lean();
};

const findById = async (id) => {
    return GastoModel.findById(id).lean();
};

const save = async (data) => {
    const newGasto = new GastoModel(data);
    await newGasto.save();
    return newGasto.toObject(); // Devuelve el objeto plano
};

const update = async (id, data) => {
    // { new: true } hace que devuelva el documento actualizado
    return GastoModel.findByIdAndUpdate(id, data, { new: true }).lean();
};

const remove = async (id) => {
    const result = await GastoModel.findByIdAndDelete(id);
    return !!result; // Devuelve true si lo encuentra y borro, false si no
};

module.exports = {
    findAll,
    findById,
    save,
    update,
    remove
};