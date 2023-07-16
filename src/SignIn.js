import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import "./css/App.css";

const SignIn = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState({
    Length: false,
    isNumberUsed: false,
  });
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    setIsValid({
      Length: password.length >= 7,
      isNumberUsed: /\d/.test(password),
    });
  };

  const handleChangePasswordCheck = (e) => {
    setPasswordCheck(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === passwordCheck) {
      fetch("http://localhost:3000/sign-in", {
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
          if (message.status === "success") {
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Signing in has been succeed",
            });
          }
        });
      console.log("Signed in with:", userName, password);
    } else {
      Swal.fire({
        icon: "error",
        title: "Something went wrong!",
        text: "Please Check!",
      }).then(() => {
        window.location.reload();
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="sign-in">
        <h1>Sign In</h1>
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
                onChange={handleChangePassword}
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
            {password && !isValid.Length && (
              <p className="error-message">
                Password should be <br /> at least 8 characters long.
              </p>
            )}
            {password && !isValid.isNumberUsed && (
              <p className="error-message">
                Password should be <br /> contain at least 2 numbers.
              </p>
            )}
            <label htmlFor="password-check">Check Password</label>
            <div className="input">
              <input
                className="passwordText"
                type={passwordVisible ? "text" : "password"}
                id="password"
                value={passwordCheck}
                onChange={handleChangePasswordCheck}
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
          <button type="submit">Sign In</button>
          <a href="/">Log in</a>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default SignIn;
