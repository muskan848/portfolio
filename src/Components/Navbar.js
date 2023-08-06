import { React, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);

  const [color,setColor]=useState(false);
  const changeColor=()=>{
    if(window.scrollY>=100){
        setColor(true);
    }
    else{
        setColor(false);
    }
  }
  window.addEventListener("scroll",changeColor);

  return (
    <div className={color?"header header-bg":"header"}>
      <Link to="/">
        <h1>PORTFOLIO</h1>
      </Link>
      <ul className={click?'nav-menu':'nav-menu active'}>
        <li>
          <Link to="/"> HOME </Link>
        </li>
        <li>
          <Link to="/projects"> PROJECTS </Link>
        </li>
        <li>
          <Link to="/about"> ABOUT </Link>
        </li>
        <li>
          <Link to="/contact"> CONTACT </Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaBars size={20} style={{ color: "#fff" }} />
        ) : (
          <FaTimes size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
