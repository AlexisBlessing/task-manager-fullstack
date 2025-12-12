# Task Manager - Full Stack App

Aplicación Full Stack para gestión de tareas con autenticación JWT.  
Cada usuario puede registrarse, iniciar sesión y administrar sus propias tareas (crear, editar, eliminar y filtrar por estado).

Este proyecto forma parte de una prueba técnica para un puesto **Full Stack Web Developer (Semi Senior)**.


---

## Tecnologías utilizadas

### **Frontend**
- React + Vite
- React Router DOM
- Context API (manejo de auth)
- Axios
- Hooks personalizados
- CSS modular básico

### **Backend**
- Node.js + Express
- MongoDB + Mongoose
- JWT
- Bcryptjs
- CORS
- Dotenv

### **Testing**
- Jest
- Supertest
- Base de datos de testing separada

---

## Requisitos previos

Asegurate de tener instalado:

- Node.js (16+)
- npm o pnpm
- MongoDB local o cuenta en MongoDB Atlas

---

## Instalación del proyecto

La estructura general es:

/task-manager
   /backend
   /frontend 

---

## Backend – Setup y ejecución

### Ingresar a la carpeta backend
cd backend

### Instalar dependencias
npm install

### Crear un archivo .env basado en .env.example
PORT=4000
MONGO_URI=mongodb://localhost:27017/taskmanager
JWT_SECRET=supersecretkey

### Ejecutar el servidor
npm run dev

### Servidor disponible en: 
http://localhost:4000

---

## Frontend – Setup y ejecución

### Ingresar a la carpeta frontend
cd frontend

### Instalar dependencias
npm install

### Ejecutar la aplicación
npm run dev

### La app quedará disponible en:
http://localhost:5173

---

## Endpoints principales

### Auth
POST	/api/auth/register		Registrar usuario
POST	/api/auth/login			Iniciar sesión

### Tasks
GET	/api/tasks			Listar tareas del usuario
POST	/api/tasks			Crear una tarea
PUT	/api/tasks/:id			Editar tarea
DELETE	/api/tasks/:id			Eliminar tarea

---

## Testing

### Ejecutar los tests del backend
npm test

### Configuración destacada:
Base de datos de testing independiente (taskmanager_test)
Tests unitarios del servicio de autenticación
Tests de integración de rutas con Supertest
Carga automática de .env.test

---

## Arquitectura Backend

src/
    app.js
    server.js
    config/
        db.js
        db_test.js
    models/
        user.model.js
        task.model.js
    modules/
        auth/
            auth.controller.js
            auth.service.js
            auth.routes.js
        tasks/
            task.controller.js
            task.service.js
            task.routes.js
    middlewares/
        auth.js
    utils/
        generateJWT.js
    tests/

---

## Arquitectura Frontend

src/
    api/
        axios.js
    context/
        AuthContext.jsx
    pages/
	Home.jsx
	Home.css
        Login.jsx
	Login.css
        Register.jsx
	Register.css
        Tasks.jsx
	Tasks.css
    components/
        TaskForm.jsx
        TaskItem.jsx
	TaskItem.css
    router/
        AppRouter.jsx
        PrivateRoute.jsx
    hooks/
        useAuth.js

---

## Decisiones técnicas

- Separación estricta de capas en backend (Controller – Service – Model)
- Diseño escalable con módulos independientes
- Middleware de autenticación reutilizable
- Rutas protegidas en frontend mediante <PrivateRoute />
- Persistencia de token con localStorage
- React Context para manejo global de sesión
- Axios instance para evitar repetición de código
- Tests orientados a flujos reales con Supertest

---

## Despliegue y Enlaces Vivos

El proyecto ha sido desplegado y está completamente funcional en la nube.

- Frontend	Vercel		task-manager-frontend-azure-seven.vercel.app
- Backend	Render		task-manager-backend-yxmh.onrender.com


---

## Autor
Alexander Raúl Suarez Pereda
Proyecto desarrollado como parte de una prueba técnica Full Stack.





