//Define el modelo Order con la función createOrder para insertar nuevos pedidos en la base de datos.
const db = require('../db/connection');

const createOrder = (tableNumber, items, subtotal, total, callback) => {
    const sql = 'INSERT INTO orders (table_number, items, subtotal, total) VALUES (?, ?, ?, ?)';
    db.query(sql, [tableNumber, JSON.stringify(items), subtotal, total], (err, result) => {
        if (err) {
            return callback(err);
        }
        callback(null, result.insertId);
    });
};

//Función para obtener los todos los pedidos.
const getAllOrders = (callback) => {
    const sql = 'SELECT * FROM orders';
    db.query(sql, (err, results) => {
        if (err) {
            return callback(err);
        }
        callback(null, results);
    });
};

module.exports = {
    createOrder,
    getAllOrders
};