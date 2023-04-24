import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Inicio from "./components/Dashboard/Inicio";
import Index from "./components/Dashboard/Index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/dashboard" element={<Index />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
