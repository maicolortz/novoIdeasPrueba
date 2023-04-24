import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, TextField, Typography } from "@mui/material";
import { login } from "../../Redux/sessionSlice";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = ({ username, password }) => {
    dispatch(login({ username, password }));
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin({ password: password, username: username });
    /*  if (username === "admin" && password === "admin") {
      console.log("estaria bien");
    } else {
      console.log("no esta bien");
    } */
  };
  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Administrador
      </Typography>
      <TextField
        required
        fullWidth
        label="Usuario"
        value={username}
        onChange={handleUsernameChange}
      />
      <TextField
        required
        fullWidth
        label="Contraseña"
        type="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <Button variant="contained" type="submit" fullWidth>
        Ingresar
      </Button>
    </form>
  );
}

export default Login;
