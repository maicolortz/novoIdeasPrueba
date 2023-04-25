import * as React from "react";
import { styled } from "@mui/material/styles";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import Chat from "../Chat";
import { useNavigate } from "react-router-dom";
import Logout from "../Logout";
import React from "react";

const Appbar = styled(AppBar)({
  backgroundColor: "#212121",
});

const NavButton = styled(Button)({
  color: "#ffffff",
});

export default function Navbar() {
  const navigate = useNavigate();

  if (!location.pathname.startsWith("/dashboard")) {
    return null;
  }

  return (
    <Appbar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Novo
        </Typography>
        <NavButton onClick={() => navigate("/dashboard")} color="inherit">
          Inicio
        </NavButton>
        <NavButton onClick={() => navigate("/dashboard/chat")} color="inherit">
          Chat
        </NavButton>
        <Logout />
      </Toolbar>
    </Appbar>
  );
}
