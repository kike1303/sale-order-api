Este proyecto es una api para crear, leer, editar y eliminar productos para la venta.
Está desarrollado en Express.js, usando typescript.

Actualmente está pensado para correr el local, no está desplegado en ningún lado.

Lo único que se necesita para correr este proyecto, es tener [Docker](https://www.docker.com/) instalado en tu computadora. Sin embargo se recomienda tener node 18 para un uso más cómodo de los scripts para levantar el proyecto, correr migraciones, test, etc.

Aquí te explico paso a paso como levantar el proyecto en ambos caso (con docker o con node).

Una vez el servicio esté levantado y las migraciones hechas, podemos hacer peticiones http, se recomienda usar la coleción de postman que está en la raíz de este proyecto.

Al hacer merge (o un pull request) hacia la rama main, se ejecutará un action que verificará que el build esté correcto, que el lint no de errores y que los unit test estén pasando correctamente.

## Iniciar proyecto Docker (no necesitas ninguna otra dependencia)

-   Abre una terminal, ubícate en la carpeta del proyecto y ejecuta:

```
docker-compose up --build
```

Esto levantará un servidor y creará la base de datos correspondiente.

-   En otro terminal, parado en la dirección del proyecto, mientras el servidor está prendido, ejecuta:

```
docker exec -it sales-order-api-container npm run migrations
```

Este comando hará la migración correspondiente para crear la tabla que usaremos con sus respectivas columnas.

-   Para correr los test unitarios ejecuta:

```
docker exec -it sales-order-api-container npm run test
```

-   Para correr el lint ejecuta:

```
docker exec -it sales-order-api-container npm run lint
```

## Inciar proyecto con Node (necesitas docker y node 18 instalados en tu máquina)

-   Abre una terminal, ubícate en la carpeta del proyecto y ejecuta:

```
npm run dev
```

Esto levantará un servidor y creará la base de datos correcpondiente.

-   En otro terminal, parado en la dirección del proyecto, mientras el servidor está prendido, ejecuta:

```
npm run migrations
```

Este comando hará la migración correspondiente para crear la tabla que usaremos con sus respectivas columnas.

-   Para correr los test unitarios ejecuta:

```
npm run test
```

-   Para correr el lint ejecuta:

```
npm run lint
```
