import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./../Auth/Login";
import Register from "../Auth/Register";
import Home from "./../Home/Home";
import NavBar from "../Navbar/NavBar";

const AppRouter = () => {
  return (
    <div style={{ width: "100%" }}>
      <NavBar />
      <div style={{ marginTop: "50px", width: "100%" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
};

export default AppRouter;
