import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import { apiHost } from "../../config";

const Login = () => {
  const [query, setQuery] = useState({
    username: "",
    password: "",
  });
  const [submitting, setSubmitting] = useState(false);
  // const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [auth, setAuth] = useContext(AuthContext);

  const updateForm = (field, value) => {
    setQuery({
      ...query,
      [field]: value,
    });
  };

  const onSubmit = async () => {
    // submit query to backend to login.
    setSubmitting(true);
    try {
      const res = await axios.post(`${apiHost}/api/auth/signin`, query);
      const profileRes = await axios.get(`${apiHost}/api/profile/self`, {
        headers: {
          Authorization: `Bearer ${res.data.token}`,
        },
      });
      console.log(profileRes.data);
      setAuth({ token: res.data.token, profile: profileRes.data });
      setSubmitting(false);
      navigate("/profile");
    } catch (err) {
      console.error(err.response.data.message);
      alert(err.response.data.error);
      setSubmitting(false);
    }
  };

  return (
    // <Splash image={loginbackground}>
    <div
      style={{
        display: "flex",
        flex: "1",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        boxShadow: "inset 0 0 0, 1000px, rgba 0 0 0 .2",
      }}
    >
      <h1
        style={{
          marginTop: "2em",
          paddingBottom: ".5em",
          fontFamily: "Bebas Neue, cursive",
          letterSpacing: "8px",
        }}
      >
        sign in
      </h1>
      <LoginForm
        query={query}
        updateForm={updateForm}
        onSubmit={onSubmit}
        submitting={submitting}
      />
    </div>
    // </Splash>
  );
};

export default Login;
