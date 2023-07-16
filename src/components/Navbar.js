import logo from "../logo192.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import "../css/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} />
        <h1>Popop</h1>
      </div>
    </div>
  );
};

export default Navbar;
