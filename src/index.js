import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";

import Login from "./Login";
import SignIn from "./SignIn";
import MainPage from "./MainPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  </BrowserRouter>
);
