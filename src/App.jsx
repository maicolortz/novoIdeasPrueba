import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Navbar from "./components/Dashboard/Navbar/Navbar";
import Inicio from "./components/Dashboard/Inicio";
import Chat from "./components/Dashboard/Chat";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/dashboard" element={<Inicio />} />
          <Route path="/dashboard/chat" element={<Chat />} />

          <Route />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
