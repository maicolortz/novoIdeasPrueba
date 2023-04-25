import { Button } from "@mui/material";
import React from "react";

import { useDispatch } from "react-redux";
import { logout } from "../../Redux/sessionSlice";
import { useNavigate } from "react-router-dom";

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate("/");
  };
  return (
    <Button variant="contained" color="warning" onClick={handleLogout}>
      Logout
    </Button>
  );
}

export default Logout;
