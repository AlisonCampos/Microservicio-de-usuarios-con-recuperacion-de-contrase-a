import React, { useState } from "react";
import { getSecurityQuestion, forgotPassword } from "../api";
import { TextField, Button, Typography, Box, Alert } from "@mui/material";
import LockResetIcon from '@mui/icons-material/LockReset';

export default function ForgotPassword() {
  const [username, setUsername] = useState("");
  const [securityQuestion, setSecurityQuestion] = useState("");
  const [securityAnswer, setSecurityAnswer] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const handleGetQuestion = async () => {
    setSecurityQuestion("");
    setMessage("");
    setError(false);
    const res = await getSecurityQuestion(username);
    if (res.securityQuestion) {
      setSecurityQuestion(res.securityQuestion);
      setError(false);
    } else {
      setMessage(res.error);
      setError(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    const res = await forgotPassword({ username, securityAnswer, newPassword });
    if (res.message) {
      setMessage(res.message);
      setError(false);
    } else {
      setMessage(res.error);
      setError(true);
    }
  };

  return (
    <Box sx={{ mt: 5 }}>
      <Typography variant="h6" gutterBottom color="primary">
        <LockResetIcon sx={{ mr: 1, verticalAlign: "middle" }} />
        Recuperar Contraseña
      </Typography>
      <Box display="flex" gap={1} alignItems="center" mb={2}>
        <TextField
          label="Usuario"
          value={username}
          onChange={e => setUsername(e.target.value)}
          size="small"
        />
        <Button variant="outlined" color="secondary" onClick={handleGetQuestion}>
          Obtener pregunta
        </Button>
      </Box>
      {securityQuestion && (
        <Alert severity="info" sx={{ mb: 2 }}>
          Pregunta de seguridad: <strong>{securityQuestion}</strong>
        </Alert>
      )}
      <form onSubmit={handleSubmit}>
        <TextField
          label="Respuesta de seguridad"
          fullWidth
          margin="normal"
          value={securityAnswer}
          onChange={e => setSecurityAnswer(e.target.value)}
          disabled={!securityQuestion}
          required
        />
        <TextField
          label="Nueva contraseña"
          type="password"
          fullWidth
          margin="normal"
          value={newPassword}
          onChange={e => setNewPassword(e.target.value)}
          disabled={!securityQuestion}
          required
        />
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          type="submit"
          sx={{ mt: 2 }}
          disabled={!securityQuestion}
        >
          Cambiar Contraseña
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