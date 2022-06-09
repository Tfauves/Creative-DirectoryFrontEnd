import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./../Auth/Login";
import Register from "../Auth/Register";
import Home from "../Home/Home";

const AppRouter = () => {
  return (
    <div>
      <div>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </div>
    </div>
  );
};

export default AppRouter;
