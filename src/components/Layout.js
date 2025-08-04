import React from "react";
import { Container, AppBar, Toolbar, Typography, Box, Paper } from "@mui/material";

export default function Layout({ children }) {
  return (
    <Box sx={{ background: "#eef1f6", minHeight: "100vh" }}>
      <AppBar
        position="static"
        elevation={2}
        sx={{
          background: "linear-gradient(to right, #1e3799, #38ada9)",
        }}
      >
        <Toolbar>
          <Typography variant="h5" sx={{ fontWeight: "bold", flexGrow: 1 }}>
            Gestión de Usuarios
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" sx={{ py: 5 }}>
        <Paper
          elevation={6}
          sx={{
            p: 4,
            borderRadius: 4,
            backgroundColor: "#ffffff",
          }}
        >
          {children}
        </Paper>
      </Container>
    </Box>
  );
}
