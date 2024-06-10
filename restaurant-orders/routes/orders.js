//Define las rutas relacionadas con los pedidos. Implementa la ruta POST /orders/new para crear nuevos pedidos.
const express = require('express');
const router = express.Router();
const Order = require('../models/order');

router.post('/new', (req, res) => {
    const { tableNumber, items } = req.body;

    if (!tableNumber || !items || !Array.isArray(items)) {
        return res.status(400).send('Input Inválido');
    }

    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const total = subtotal * 1.10; // Incluye la propina del 10%
    Order.createOrder(tableNumber, items, subtotal, total, (err, orderId) => {
        if (err) {
            return res.status(500).send('Error al crear la Orden');
        }
        res.status(201).send(`Orden creada con la ID: ${orderId}`);
    });
});

//Implementa la ruta GET /orders para obtener la lista de pedidos.
router.get('/all', (req, res) => {
    Order.getAllOrders((err, orders) => {
        if (err) {
            return res.status(500).send('Error retrieving orders');
        }
        res.json(orders);
    });
});


module.exports = router;
