# Monokit React con ViteJS y SWC

Este repositorio es un monorepo que contiene varios proyectos de React, todos construidos con ViteJS y SWC. Cada subproyecto tiene su propia configuración y conjunto de dependencias, pero todos comparten una estructura común.

## Autor: `dev-kei-ow`

## Instalación

Para instalar todas las dependencias de todos los subproyectos, necesitarás [Node.js](https://nodejs.org/en/download/) y [npm](https://www.npmjs.com/get-npm) instalados en tu computadora. Desde tu línea de comandos:

```bash
# Clona este repositorio
$ git clone https://github.com/your-username/monokit-reactx-vitejs

# Entra al repositorio
$ cd monokit-reactx-vitejs

# Instala las dependencias de todos los subproyectos
$ npm install
```

## Scripts de la raíz

Los scripts de la raíz permiten instalar dependencias, iniciar el servidor de desarrollo, construir el proyecto y ejecutar otras tareas para cada subproyecto.

- `add:01`, `add:02`, `add:03`, `add:04`: Instala las dependencias para el subproyecto correspondiente.
- `unin:01`, `unin:04`: Desinstala las dependencias del subproyecto correspondiente.
- `jsonserver:03`: Inicia el servidor JSON para el subproyecto 3.
- `Dev:01`, `Dev:02`, `Dev:03`, `Dev:04`: Inicia el servidor de desarrollo para el subproyecto correspondiente.
- `build:01`: Construye el subproyecto 1 para producción.
- `lint:01`: Ejecuta ESLint en el subproyecto 1.
- `preview:01`: Inicia el servidor de vista previa para el subproyecto 1.
- `test:01`: Ejecuta las pruebas para el subproyecto 1.

## Cómo contribuir

Si deseas contribuir a este proyecto, por favor haz un fork del repositorio, crea una nueva rama para tus cambios y luego envía un pull request. Asegúrate de que tus cambios pasen todas las pruebas y cumplan con las guías de estilo del proyecto.

## Licencia

Este proyecto está licenciado bajo la licencia ISC. Para más detalles, por favor vea el archivo LICENSE en el repositorio.
