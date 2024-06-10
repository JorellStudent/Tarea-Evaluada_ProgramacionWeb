# Sistema de Pedidos para un Restaurante

Este proyecto es un sistema de pedidos para un restaurante desarrollado utilizando Node.js, Express.js y MySQL. El sistema permite ingresar los pedidos de los clientes, calcular el subtotal y el total (incluyendo una propina del 10%), y registrar el número de mesa.

## Contenidos

- [Instalación](#instalación)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Configuración de la Base de Datos](#configuración-de-la-base-de-datos)
- [Ejecutar el Proyecto](#ejecutar-el-proyecto)
- [Uso del API](#uso-del-api)
- [Capturas de Pantalla](#capturas-de-pantalla)
- [Documentación del Código](#documentación-del-código)

## Instalación

Para instalar y ejecutar este proyecto, sigue los siguientes pasos:

1. **Clona el repositorio:**
   ```bash
   git clone <URL del repositorio>
   cd restaurant-orders

  
2. **Instala las dependencias necesarias:**
  npm install express mysql body-parser

3. **Estructura del Proyecto:**

  restaurant-orders/
  ├── db/
  │   └── connection.js
  ├── models/
  │   └── order.js
  ├── routes/
  │   └── orders.js
  ├── app.js
  └── package.json

4. **Configuracion de la Base de Datos:** 
A.Inicia tu servidor MySql y crea la base de datos con el siguiente código:

  CREATE DATABASE restaurant;
  USE restaurant;
  CREATE TABLE orders (
      id INT AUTO_INCREMENT PRIMARY KEY,
      table_number INT NOT NULL,
      items TEXT NOT NULL,
      subtotal DECIMAL(10, 2) NOT NULL,
      total DECIMAL(10, 2) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );

B.Configura la conexión a la base de datos con el siguiente codigo que se encuentra en el archivo "db/connection.js":

  const mysql = require('mysql');
  const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'your_password',
      database: 'restaurant'
  });
  
  connection.connect((err) => {
      if (err) {
          console.error('Error connecting to the database:', err);
          return;
      }
      console.log('Connected to the MySQL database.');
  });
  
  module.exports = connection;

  5. **Ejecutar el Proyecto:**
  A.Abre la terminal del Visual Studio o coloca el siguiente comando:

  node app.js

  B.Para acceder a la página web ingresa a http://localhost:3000/

  6. **Uso del Postman**
  




