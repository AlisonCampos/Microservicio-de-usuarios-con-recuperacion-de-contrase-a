import React, { useState } from "react";
import { registerUser, getUsers } from "../api";
import { TextField, Button, Typography, Box, Alert } from "@mui/material";
import PersonAddIcon from '@mui/icons-material/PersonAdd';

export default function Register({ setUsers }) {
  const [form, setForm] = useState({
    username: "",
    password: "",
    securityQuestion: "",
    securityAnswer: ""
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    const res = await registerUser(form);
    if (res.message) {
      setMessage(res.message);
      setError(false);
      // Actualizar lista de usuarios
      const updatedUsers = await getUsers();
      setUsers(updatedUsers);
      // Resetear el formulario
      setForm({
        username: "",
        password: "",
        securityQuestion: "",
        securityAnswer: ""
      });
    } else {
      setMessage(res.error);
      setError(true);
    }
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom color="primary">
        <PersonAddIcon sx={{ mr: 1, verticalAlign: "middle" }} />
        Registro de Usuario
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Usuario"
          name="username"
          fullWidth
          margin="normal"
          value={form.username}
          onChange={handleChange}
          required
        />
        <TextField
          label="Contraseña"
          name="password"
          type="password"
          fullWidth
          margin="normal"
          value={form.password}
          onChange={handleChange}
          required
        />
        <TextField
          label="Pregunta de seguridad"
          name="securityQuestion"
          fullWidth
          margin="normal"
          value={form.securityQuestion}
          onChange={handleChange}
          required
        />
        <TextField
          label="Respuesta de seguridad"
          name="securityAnswer"
          fullWidth
          margin="normal"
          value={form.securityAnswer}
          onChange={handleChange}
          required
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          type="submit"
          sx={{ mt: 2 }}
        >
          Registrarse
        </Button>
      </form>
      {message && (
        <Alert severity={error ? "error" : "success"} sx={{ mt: 2 }}>
          {message}
        </Alert>
      )}
    </Box>
  );
}
