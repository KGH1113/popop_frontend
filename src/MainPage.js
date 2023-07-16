import React, { useState, useEffect } from "react";

import MainPageNavbar from "./components/MainPageNavbar";
import Footer from "./components/Footer";

import "./css/App.css";

const MainPage = ({ UserID, UserName }) => {
  const [point, setPoint] = useState(0);

  const Add = () => {
    setPoint((prevPoint) => prevPoint + 1);
    fetch("http://localhost:3000/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userID: UserID,
      }),
    }).then((response) => {
      return response.json();
    }).then((message) => {
      console.log(message);
    });
  };

  useEffect(() => {
    fetch("http://localhost:3000/get-point", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userID: UserID,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((Point) => {
        setPoint(Point);
      });
    window.addEventListener("click", Add);
    window.addEventListener("keydown", Add);

    return () => {
      window.removeEventListener("click", Add);
      window.removeEventListener("keydown", Add);
    };
  }, []);

  return (
    <>
      <MainPageNavbar UserName={UserName} />
      <div className="login">
        <h1>Counter!</h1>
        <h2>{point}</h2>
      </div>
      <Footer />
    </>
  );
};

export default MainPage;
