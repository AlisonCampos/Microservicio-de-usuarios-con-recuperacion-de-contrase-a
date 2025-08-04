
# Microservicio de Usuarios con Recuperación de Contraseña

Este proyecto es una aplicación frontend desarrollada con **React** y **Material UI**, que permite gestionar el registro de usuarios, recuperar contraseñas mediante preguntas de seguridad y visualizar una lista de usuarios registrados. Se conecta a un backend a través de una API REST en `http://localhost:3001/api/auth`.

## 🧩 Funcionalidades principales

- ✅ Registro de usuario con nombre de usuario, contraseña, pregunta y respuesta de seguridad.
- 🔐 Recuperación de contraseña utilizando la pregunta de seguridad previamente establecida.
- 📋 Visualización de usuarios registrados junto con su pregunta de seguridad.
- 🎨 Diseño responsivo y atractivo gracias a Material UI.

## 📁 Estructura del proyecto

```
src/
│
├── api.js                 # Funciones para consumir la API
├── App.js                 # Componente principal de la aplicación
└── components/
    ├── Layout.js          # Componente de diseño general (AppBar + contenedor)
    ├── Register.js        # Formulario de registro de nuevos usuarios
    ├── ForgotPassword.js  # Recuperación de contraseña con pregunta de seguridad
    └── UsersList.js       # Listado de usuarios registrados
```

## 🚀 Instalación y ejecución

1. Clona este repositorio:

```bash
git clone https://github.com/tu-usuario/microservicio-usuarios.git
cd microservicio-usuarios
```

2. Instala las dependencias:

```bash
npm install
```

3. Asegúrate de que el backend esté corriendo en `http://localhost:3001`.

4. Ejecuta la aplicación en desarrollo:

```bash
npm start
```

La aplicación se abrirá automáticamente en tu navegador en `http://localhost:3000`.

## 🌐 Endpoints esperados del backend

La aplicación espera que el backend tenga disponibles los siguientes endpoints:

| Método | Endpoint                          | Descripción                                 |
|--------|-----------------------------------|---------------------------------------------|
| POST   | `/api/auth/register`              | Registra un nuevo usuario                   |
| POST   | `/api/auth/get-security-question` | Obtiene la pregunta de seguridad por usuario|
| POST   | `/api/auth/forgot-password`       | Cambia la contraseña tras validar respuesta |
| GET    | `/api/auth/users`                 | Retorna la lista de usuarios registrados    |

## 🛠️ Tecnologías utilizadas

- [React](https://reactjs.org/)
- [Material UI](https://mui.com/)
- [JavaScript (ES6+)](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

## 📌 Notas

- Este proyecto es solo el frontend. 
- El backend debe correr en el puerto 3001 o puedes ajustar la constante `API_URL` en el archivo `api.js`.


## 📄 Licencia

Este proyecto está bajo la licencia MIT. Puedes hacer lo que desees con él, siempre y cuando mantengas los créditos correspondientes.
