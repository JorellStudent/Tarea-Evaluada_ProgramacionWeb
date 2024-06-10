//Configura el servidor Express, usa el middleware body-parser para parsear JSON y configura las rutas para manejar las solicitudes HTTP.
const express = require('express');
const bodyParser = require('body-parser');
const ordersRouter = require('./routes/orders');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/orders', ordersRouter);

//Llamar el html orders
app.use('/orders', ordersRouter);

// Se usa para ocupar archivos estáticos.
app.use(express.static('public')); 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
