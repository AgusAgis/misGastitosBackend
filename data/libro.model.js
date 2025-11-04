// data/libro.model.js

// Array en memoria para almacenar los libros (Persistencia en Memoria).
let libros = [
    { id: 1, titulo: "Cien años de soledad", autor: "Gabriel García Márquez", año: 1967 },
    { id: 2, titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", año: 1605 },
];

// Contador para asignar IDs únicos y consecutivos.
let nextId = 3;

/**
 * Obtiene la lista completa de libros.
 */
const findAll = () => {
    return libros;
};

/**
 * Busca un libro por su ID.
 */
const findById = (id) => {
    return libros.find(libro => libro.id === id);
};

/**
 * Crea y añade un nuevo libro.
 */
const save = (data) => {
    const newLibro = {
        id: nextId++,
        titulo: data.titulo,
        autor: data.autor,
        año: parseInt(data.año)
    };
    libros.push(newLibro);
    return newLibro;
};

/**
 * Actualiza un libro existente por ID.
 */
const update = (id, data) => {
    const index = libros.findIndex(libro => libro.id === id);

    if (index === -1) {
        return null; // No encontrado
    }

    const updatedLibro = {
        ...libros[index],
        titulo: data.titulo || libros[index].titulo,
        autor: data.autor || libros[index].autor,
        año: data.año ? parseInt(data.año) : libros[index].año
    };

    libros[index] = updatedLibro;
    return updatedLibro;
};

/**
 * Elimina un libro por ID.
 */
const remove = (id) => {
    const index = libros.findIndex(libro => libro.id === id);

    if (index === -1) {
        return false; // No encontrado
    }

    libros.splice(index, 1);
    return true;
};

module.exports = {
    findAll,
    findById,
    save,
    update,
    remove
};