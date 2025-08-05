import React, { useState, useEffect } from "react";
import Layout from "./components/Layout";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import UsersList from "./components/UsersList";
import Login from "./components/Login";
import { CssBaseline, AppBar, Toolbar, Typography, Button  } from "@mui/material";
import { getUsers } from "./api";

function App() {
  const [users, setUsers] = useState([]);
  const [auth, setAuth] = useState(null); // usuario autenticado
  const [view, setView] = useState("register"); // register, login, forgot, users

  useEffect(() => {
    if (auth) loadUsers();
  }, [auth]);

  const loadUsers = async () => {
    const data = await getUsers();
    if (Array.isArray(data)) setUsers(data);
  };

  const handleLogout = () => {
    setAuth(null);
    setView("login");
  };

  return (
    <>
      <CssBaseline />
      <Layout>
        {auth && (
          <AppBar position="static" color="default" sx={{ mb: 3 }}>
            <Toolbar>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                Bienvenido, {auth.username}
              </Typography>
              <Button color="inherit" onClick={handleLogout}>
                Salir
              </Button>
            </Toolbar>
          </AppBar>
        )}
        {!auth ? (
          <>
            {view === "register" && (
              <>
                <Register setUsers={setUsers} />
                <Button
                  variant="text"
                  sx={{ mt: 2 }}
                  onClick={() => setView("login")}
                >
                  ¿Ya tienes cuenta? Inicia sesión
                </Button>
              </>
            )}
            {view === "login" && (
              <Login
                onLogin={user => {
                  setAuth(user);
                  setView("users");
                }}
                goToForgot={() => setView("forgot")}
              />
            )}
            {view === "forgot" && (
              <>
                <ForgotPassword />
                <Button
                  variant="text"
                  sx={{ mt: 2 }}
                  onClick={() => setView("login")}
                >
                  Volver al login
                </Button>
              </>
            )}
          </>
        ) : (
          <UsersList users={users} />
        )}
      </Layout>
    </>
  );
}

export default App;