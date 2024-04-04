# Monokit React con ViteJS y SWC

Este repositorio es un monorepo que contiene varios proyectos de React, todos construidos con ViteJS y SWC. Cada subproyecto tiene su propia configuración y conjunto de dependencias, pero todos comparten una estructura común.

## Author:`Dev-Ki-Ow`

## Subproyectos

### 1. Notes App

Una aplicación de notas construida con React, MUI, Emotion y Axios.

#### Dependencias

- `@emotion/react` y `@emotion/styled`: Librerías para escribir CSS en JavaScript, proporcionando poderosas y predecibles primitivas de estilo.
- `@mui/material`: Una biblioteca de componentes de UI para React que implementa el diseño Material.
- `axios`: Un cliente HTTP basado en promesas para el navegador y Node.js, utilizado para realizar solicitudes a APIs.
- `react` y `react-dom`: Bibliotecas de JavaScript para construir interfaces de usuario.
- `react-router-dom`: La versión de React Router para aplicaciones web.

### 2. Contador Redux Clásico

Un contador simple construido con React y Redux.

#### Dependencias

- `react` y `react-dom`: Bibliotecas de JavaScript para construir interfaces de usuario.
- `react-redux` y `redux`: Redux es una biblioteca de JavaScript para gestionar el estado de la aplicación. React Redux es la biblioteca oficial de enlaces de React para Redux.

### 3. Kanban Board Redux

Un tablero Kanban construido con React, Redux y Axios.

#### Dependencias

- `axios`: Un cliente HTTP basado en promesas para el navegador y Node.js, utilizado para realizar solicitudes a APIs.
- `react` y `react-dom`: Bibliotecas de JavaScript para construir interfaces de usuario.
- `react-redux`, `redux` y `redux-thunk`: Redux es una biblioteca de JavaScript para gestionar el estado de la aplicación. React Redux es la biblioteca oficial de enlaces de React para Redux. Redux Thunk es un middleware de Redux que permite escribir creadores de acciones asíncronas.

## Scripts de la raíz

Los scripts de la raíz permiten instalar dependencias, iniciar el servidor de desarrollo, construir el proyecto y ejecutar otras tareas para cada subproyecto.

- `add:01`, `add:02`, `add:03`: Instala las dependencias para el subproyecto correspondiente.
- `unin:01`: Desinstala las dependencias del subproyecto 1.
- `jsonserver:03`: Inicia el servidor JSON para el subproyecto 3.
- `dev:01`, `dev:02`, `dev:03`: Inicia el servidor de desarrollo para el subproyecto correspondiente.
- `build:01`: Construye el subproyecto 1 para producción.
- `lint:01`: Ejecuta ESLint en el subproyecto 1.
- `preview:01`: Inicia el servidor de vista previa para el subproyecto 1.
- `test:01`: Ejecuta las pruebas para el subproyecto 1.

## Cómo contribuir

Si deseas contribuir a este proyecto, por favor haz un fork del repositorio, crea una nueva rama para tus cambios y luego envía un pull request. Asegúrate de que tus cambios pasen todas las pruebas y cumplan con las guías de estilo del proyecto.

## Licencia

Este proyecto está licenciado bajo la licencia ISC. Para más detalles, por favor vea el archivo LICENSE en el repositorio.
