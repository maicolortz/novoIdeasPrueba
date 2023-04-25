import * as React from "react";
import { styled } from "@mui/material/styles";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Appbar = styled(AppBar)({
  backgroundColor: "#212121",
});

const NavButton = styled(Button)({
  color: "#ffffff",
});

export default function Navbar() {
  return (
    <Appbar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <NavButton color="inherit">Inicio</NavButton>
        <NavButton color="inherit">Chat</NavButton>
        <NavButton color="inherit">Logout</NavButton>
      </Toolbar>
    </Appbar>
  );
}
