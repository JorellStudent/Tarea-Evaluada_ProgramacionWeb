# Sistema de Pedidos para un Restaurante

Este proyecto es un sistema de pedidos para un restaurante desarrollado utilizando Node.js, Express.js y MySQL. El sistema permite ingresar los pedidos de los clientes, calcular el subtotal y el total (incluyendo una propina del 10%), y registrar el número de mesa.

## Contenidos

- [Instalación](#instalación)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Configuración de la Base de Datos](#configuración-de-la-base-de-datos)
- [Ejecutar el Proyecto](#ejecutar-el-proyecto)
- [Uso del Postman (API)](#uso-del-postman-api)
- [Capturas de la Interfaz de Usuario](#capturas-de-la-interfaz-de-usuario)

## Instalación

Para instalar y ejecutar este proyecto, sigue los siguientes pasos:

1. **Clona el repositorio:**
   ```bash
   git clone <URL del repositorio>
   cd restaurant-orders

  
2. **Instala las dependencias necesarias:**
   ```bash
   npm install express mysql body-parser

## Estructura del Proyecto


  restaurant-orders/
  
  ├── db/
  
  │   └── connection.js
  
  ├── models/
  
  │   └── order.js
  
  ├── routes/
  
  │   └── orders.js
  
  ├── app.js
  
  └── package.json
## Configuración de la Base de Datos

1.Inicia tu servidor MySql y crea la base de datos con el siguiente código:
```bash

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
```

2.Configura la conexión a la base de datos con el siguiente codigo que se encuentra en el archivo "db/connection.js":
```bash
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
```

## Ejecutar el Proyecto

  1.Abre la terminal del Visual Studio o coloca el siguiente comando:
```bash
  node app.js
```
  2.Para acceder a la página web ingresa a:
  ```bash
http://localhost:3000/
```
## Uso del Postman (API)

1.Descargar Postman de su página oficial:
   https://www.postman.com/downloads/
   
   ![image](https://github.com/JorellStudent/restaurant-orders/assets/167504858/9d35233a-3dca-4c97-b8b5-6a26a3f64fa5)

2.Instalar y abrir la aplicación.

   ![image](https://github.com/JorellStudent/restaurant-orders/assets/167504858/b5546cdd-ffac-4cb7-a9a1-2928e9815816)

3.Damos click en Workspaces, cremos un workspaces en blanco.

   ![image](https://github.com/JorellStudent/restaurant-orders/assets/167504858/1cda2506-48e6-4b6a-8fa6-48d00040b3e0)

4.Donde dice GET lo cambiamos para que sea POST y ponemos la URL local donde se encuentra nuestra base de datos.
```bash
   http://localhost:3000/orders/new
```

   ![image](https://github.com/JorellStudent/restaurant-orders/assets/167504858/905306d2-95a5-4616-b1e0-63a1c26b51b4)

5.Vamos a Headers y rellenamos con los siguientes datos:

   ![image](https://github.com/JorellStudent/restaurant-orders/assets/167504858/77eacfeb-dc0f-41c5-ac81-4d1791398a2e)

6.Y finalmente vamos a Body y colocamos el siguiente codigo ,para verificar que podemos introducir datos en nuestra base de datos y click en SEND:
```bash
{
 "tableNumber": 5,
 "items": [
 {"name": "Pizza", "price": 10.00, "quantity": 2},
 {"name": "Soda", "price": 2.50, "quantity": 3}
 ]
}
```

![image](https://github.com/JorellStudent/restaurant-orders/assets/167504858/91ce57a3-0af9-49fe-bb7c-598133834d75)

## Capturas de la interfaz de Usuario

1.Crear pedido.

   ![image](https://github.com/JorellStudent/restaurant-orders/assets/167504858/63fff658-9c04-4ba6-9009-3c12f82e7a39)
   
2.Ver pedidos.
   ![image](https://github.com/JorellStudent/restaurant-orders/assets/167504858/2464bc22-bc49-40ff-bfd9-dcee43b05d3d)












  




