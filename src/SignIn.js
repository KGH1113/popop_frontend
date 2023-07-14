import React, { useState } from "react";
import "./App.css";

const SignIn = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const handleSubmit = (e) => {
    if (password !== passwordCheck) {
      alert("diff");
      return;
    }
    e.preventDefault();
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
        console.log(message);
      });
    console.log("Signed in with:", userName, password);
  };

  return (
    <div className="login">
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor="password-check">Check Password</label>
          <input
            type="password"
            id="password-check"
            value={passwordCheck}
            onChange={(e) => setPasswordCheck(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign In</button>
        <a href="/">Log in</a>
      </form>
    </div>
  );
};

export default SignIn;
