# Allfunds Monorepo App

[English](#english) | [Español](#español)

## English

### Overview
This is a monorepo application built with Nx, containing both frontend and backend applications. The project uses modern web technologies and follows best practices for development.

### Project Structure
- `apps/client`: React frontend application
- `apps/server`: Express.js backend application
- `apps/server-e2e`: End-to-end tests for the server

### Technologies
#### Frontend
- React 19.0.0
- React Router DOM
- React Query (Tanstack Query)
- React Hook Form
- Tailwind CSS
- Vite
- TypeScript

#### Backend
- Express.js
- MongoDB with Mongoose
- CORS
- TypeScript

### Getting Started

1. Install dependencies:
```bash
npm install
```

2. Create environment file:
Create a `.env` file in `apps/server/src/config` with your environment variables using `.env.template` file from the reference.

3. Start the development servers:

For frontend:
```bash
npm run start:client
```

For backend:
```bash
npm run start:server
```

4. Seed the database:
Once the server is running, make a GET request to:
```
http://localhost:3000/api/news/seed
```
This will populate the database with initial data.

### Scripts
- `npm run start:client`: Start the frontend development server
- `npm run start:server`: Start the backend development server

---

## Español

### Descripción General
Esta es una aplicación monorepo construida con Nx, que contiene aplicaciones tanto frontend como backend.

### Estructura del Proyecto
- `apps/client`: Aplicación frontend en React
- `apps/server`: Aplicación backend en Express.js

### Tecnologías
#### Frontend
- React 19.0.0
- React Router DOM
- React Query (Tanstack Query)
- React Hook Form
- Tailwind CSS
- Vite
- TypeScript

#### Backend
- Express.js
- MongoDB con Mongoose
- CORS
- TypeScript

### Comenzando

1. Instalar dependencias:
```bash
npm install
```

2. Crear archivo de entorno:
Crea un archivo `.env` en `apps/server/src/config` con tus variables de entorno utilizando el `.env.template` de referencia.

3. Iniciar los servidores de desarrollo:

Para el frontend:
```bash
npm run start:client
```

Para el backend:
```bash
npm run start:server
```

4. Poblar la base de datos:
Una vez que el servidor esté corriendo, realiza una petición GET a:
```
http://localhost:3000/api/news/seed
```
Esto poblará la base de datos con datos iniciales.

### Scripts
- `npm run start:client`: Inicia el servidor de desarrollo frontend
- `npm run start:server`: Inicia el servidor de desarrollo backend
