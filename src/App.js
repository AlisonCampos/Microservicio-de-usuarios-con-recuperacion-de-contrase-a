import React, { useState, useEffect } from "react";
import Layout from "./components/Layout";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import UsersList from "./components/UsersList";
import { CssBaseline, Tabs, Tab, Box } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LockResetIcon from "@mui/icons-material/LockReset";
import GroupIcon from "@mui/icons-material/Group";
import { getUsers } from "./api";

function App() {
  const [tab, setTab] = useState(0);
  const [users, setUsers] = useState([]);

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  // Carga inicial de usuarios
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const data = await getUsers();
    if (Array.isArray(data)) {
      setUsers(data);
    }
  };

  return (
    <>
      <CssBaseline />
      <Layout>
        <Tabs
          value={tab}
          onChange={handleChange}
          centered
          textColor="primary"
          indicatorColor="primary"
          sx={{ mb: 3 }}
        >
          <Tab icon={<PersonAddIcon />} label="Registro" />
          <Tab icon={<LockResetIcon />} label="Recuperar Contraseña" />
          <Tab icon={<GroupIcon />} label="Usuarios" />
        </Tabs>

        <Box hidden={tab !== 0}>
          <Register setUsers={setUsers} />
        </Box>
        <Box hidden={tab !== 1}>
          <ForgotPassword />
        </Box>
        <Box hidden={tab !== 2}>
          <UsersList users={users} />
        </Box>
      </Layout>
    </>
  );
}

export default App;
