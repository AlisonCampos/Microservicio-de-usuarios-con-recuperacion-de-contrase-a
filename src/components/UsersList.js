import React from "react";
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function UsersList({ users }) {
  return (
    <Box sx={{ mt: 5 }}>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", color: "#1e3799" }}>
        Lista de Usuarios Registrados
      </Typography>
      <List>
        {users.map((u, i) => (
          <ListItem key={i} sx={{ borderBottom: "1px solid #f1f2f6" }}>
            <ListItemIcon>
              <Avatar sx={{ background: "linear-gradient(to right, #1e3799, #38ada9)" }}>
                <AccountCircleIcon />
              </Avatar>
            </ListItemIcon>
            <ListItemText
              primary={u.username}
              secondary={`Pregunta de seguridad: ${u.securityQuestion}`}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
