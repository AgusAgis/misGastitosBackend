// data/gastos.model.js

// Array en memoria para almacenar los gastos (Persistencia en Memoria).
let gastos = [
    { id: 1, titulo: "Hogar", monto: 11300, fecha: "2025/11/03" },
    { id: 2, titulo: "Entretenimiento", monto: 9500, fecha: "2025/11/04" },
    { id: 2, titulo: "Comida", monto: 4000, fecha: "2025/11/04" },
];

// Contador para asignar IDs únicos y consecutivos.
let nextId = 4;

/**
 * Obtiene la lista completa de gastos.
 */
const findAll = () => {
    return gastos;
};

/**
 * Busca un gasto por su ID.
 */
const findById = (id) => {
    return gastos.find(gasto => gasto.id === id);
};

/**
 * Crea y añade un nuevo gasto.
 */
const save = (data) => {
    const newgGasto = {
        id: nextId++,
        titulo: data.titulo,
        monto: data.monto,
        fecha: data.fecha
    };
    gastos.push(newgGasto);
    return newgGasto;
};

/**
 * Actualiza un gasto existente por ID.
 */
const update = (id, data) => {
    const index = gastos.findIndex(gasto => gasto.id === id);

    if (index === -1) {
        return null; // Gasto no encontrado
    }

    const updatedGasto = {
        ...gastos[index],
        titulo: data.titulo || gastos[index].titulo,
        monto: data.monto || gastos[index].monto,
        fecha: data.fecha ? data.fecha : gastos[index].fecha
    };

    gastos[index] = updatedGasto;
    return updatedGasto;
};

/**
 * Elimina un gasto por ID.
 */
const remove = (id) => {
    const index = gastos.findIndex(gasto => gasto.id === id);

    if (index === -1) {
        return false; // No encontrado
    }

    gastos.splice(index, 1);
    return true;
};

module.exports = {
    findAll,
    findById,
    save,
    update,
    remove
};