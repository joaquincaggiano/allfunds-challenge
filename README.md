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

2. Start the development servers:

For frontend:
```bash
npm run start:client
```

For backend:
```bash
npm run start:server
```

### Development Tools
- ESLint for code linting
- Prettier for code formatting
- Jest for testing
- Nx for monorepo management

### Scripts
- `npm run start:client`: Start the frontend development server
- `npm run start:server`: Start the backend development server

---

## Español

### Descripción General
Esta es una aplicación monorepo construida con Nx, que contiene aplicaciones tanto frontend como backend. El proyecto utiliza tecnologías web modernas y sigue las mejores prácticas de desarrollo.

### Estructura del Proyecto
- `apps/client`: Aplicación frontend en React
- `apps/server`: Aplicación backend en Express.js
- `apps/server-e2e`: Pruebas end-to-end para el servidor

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

2. Iniciar los servidores de desarrollo:

Para el frontend:
```bash
npm run start:client
```

Para el backend:
```bash
npm run start:server
```

### Herramientas de Desarrollo
- ESLint para linting de código
- Prettier para formateo de código
- Jest para testing
- Nx para gestión del monorepo

### Scripts
- `npm run start:client`: Inicia el servidor de desarrollo frontend
- `npm run start:server`: Inicia el servidor de desarrollo backend
