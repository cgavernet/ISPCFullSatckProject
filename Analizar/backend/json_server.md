# Json Server

## Instalación
1 - Abrir una terminal dentro de la carpeta **Analizar/backend/jsonserver** y ejecutar el siguiente comando para instalar Json Server de forma local al proyecto.

``` 
npm install

```

## Inicio del servidor
2 - una vez instalado ejecutar el siguiente comando en la consola para levantar el servidor json

```
npm run server

```

## Consultas
Los datos se obtienen por medio de consultas a la URL http://localhost:3000/ 
Para este caso los datos de prueba se encuentran en el archivo db.json y corresponden a los siguientes recursos:
1 - alertas
2 - usuarios
3 - productos
4 - medidores
cada uno de los recursos se corresponde con los modelados en la BD, solo que contienen dos registros cada uno.
Para poder los datos de los recursos se deben realizar operaciones de GET, POST, PUT,  DELETE, etc.
Se puede probar directamente en el navegador de la siguiente manera:

* Obtener todos los usuarios: http://localhost:3000/api/usuarios

* Obtener los datos del usuario con id_usuario 2
    * http://localhost:3000/api/usuarios?id_usuario=2
    * http://localhost:3000/api/usuarios/2

Donde http://localhost:3000/api/__recurso__ para listar todos los datos del __recurso__ (alertas, usuarios, medidores, productos, etc)
