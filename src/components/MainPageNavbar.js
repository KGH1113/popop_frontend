import logo from "../logo192.png";

import Swal from "sweetalert2";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import "../css/navbar.css";

const MainPageNavbar = ({ UserName }) => {
  const handleClick = () => {
    Swal.fire({
      position: "top-end",
      title: UserName,
    });
  };
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} />
        <h1>Popop</h1>
      </div>
      <div className="user-icon" onClick={handleClick}>
        <FontAwesomeIcon icon={faUser} />
      </div>
    </div>
  );
};

export default MainPageNavbar;
