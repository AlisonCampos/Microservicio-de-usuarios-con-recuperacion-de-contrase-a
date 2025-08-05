import React, { useState } from "react";
import { loginUser } from "../api";
import { TextField, Button, Typography, Box, Alert, Link } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";

export default function Login({ onLogin, goToForgot }) {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setError("");
    const res = await loginUser(form);
    if (res.success) {
      onLogin(res.user);
    } else {
      setError(res.error || "Credenciales incorrectas");
    }
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom color="primary">
        <LockIcon sx={{ mr: 1, verticalAlign: "middle" }} />
        Iniciar Sesión
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
        <Button
          variant="contained"
          color="primary"
          fullWidth
          type="submit"
          sx={{ mt: 2 }}
        >
          Entrar
        </Button>
      </form>
      <Box sx={{ mt: 2 }}>
        <Link component="button" variant="body2" onClick={goToForgot}>
          ¿Olvidaste tu contraseña?
        </Link>
      </Box>
      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      )}
    </Box>
  );
}