import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button, TextField, Typography } from "@mui/material";
import { login } from "../../Redux/sessionSlice";
import { useSelector } from "react-redux";
function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.session.isLoggedIn);
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
  };

  useEffect(() => {
    if (loggedIn) {
      navigate("/dashboard");
    }
  }, [loggedIn]);

  return (
    <div className="containerLogin">
      <form onSubmit={handleSubmit} className="Login">
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
    </div>
  );
}

export default Login;
