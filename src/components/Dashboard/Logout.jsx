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
    <div>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}

export default Logout;
