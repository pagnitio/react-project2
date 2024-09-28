import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png"
const Navbar = () => {
const [isLoggedIn, setIsLoggedIn] = useState(false)
const navigate = useNavigate()


const login = ()=>{
    setIsLoggedIn(true)
    navigate('/dashboard')
}

const logout = () =>{
    setIsLoggedIn(false);
    navigate('/')
}

  return (
    <div className="nav_bar">
      <Link to="/" className="logo">
        <img src={logo} alt="" />
      </Link>

      <div className="right">
      <Link to="/" className="items">
          Home
        </Link>
        
        {isLoggedIn &&(

<>
       
        <Link to="/dashboard" className="items">
          Dashboard
        </Link>
        <Link to="/meals" className="items">
          Meals
        </Link>
        <Link to="/movies" className="items">
          Movies
        </Link>
        
        <button
          to="/logout"
          className="items btn btn-danger mx-3"
          style={{ fontWeight: "bold" }}
          onClick={logout}
        >
          Logout
        </button>
</>
)}

{!isLoggedIn && (
          <>
        <button 
          to="/login"
          className="items btn btn-success mx-3"
          style={{ fontWeight: "bold" }}
          onClick={login}
        >
          Login
        </button>
        </>
)}
<Link to="/contact" className="items">
          Contact
        </Link>

        <Link to="/pixabay" className="items">
        pixabay
        </Link>
      
      </div>
    </div>
  );
};

export default Navbar;
