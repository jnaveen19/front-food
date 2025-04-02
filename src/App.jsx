import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import AddRecipe from "./components/AddRecipe";
import Saved from "./components/Saved";
import Home from "./components/Home";
import Profile from "./components/Profile";

import Detail from "./components/Detail";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddRecipe />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addreceipe" element={<AddRecipe />} />
          <Route path="/:id" element={<Detail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
