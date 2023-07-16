import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainPage from "./MainPage";

import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import "./css/App.css";

const Login = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [logged, setLogged] = useState(false);
  const [userID, setUserID] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: userName,
        password: password,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((message) => {
        console.log(message);
        if (message.status === "success") {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Login has been successfully",
          }).then(() => {
            setUserID(message.userID);
            setLogged(true);
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Please check Username or password.",
          });
        }
      });
    console.log("Logged in with:", userName, password);
  };

  return (
    <div>
      {!logged && (
        <>
          <Navbar />
          <div className="login">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <div className="input">
                  <input
                    type="text"
                    id="username"
                    value={userName}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="input">
                  <input
                    className="passwordText"
                    type={passwordVisible ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <span
                    className="password-toggle"
                    onClick={togglePasswordVisibility}
                  >
                    &nbsp;
                    <FontAwesomeIcon
                      className="icon"
                      icon={passwordVisible ? faEye : faEyeSlash}
                    />
                  </span>
                </div>
              </div>
              <button type="submit">Login</button>
              <a href="/sign-in">Sign in</a>
            </form>
          </div>
          <Footer />
        </>
      )}

      {logged && (
        <>
          <MainPage UserID={userID} UserName={userName} />
        </>
      )}
    </div>
  );
};

export default Login;
