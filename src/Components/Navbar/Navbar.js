import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <div>
      <div className='navbar '>
        <div className='logo-wraper'>
          <img className='logo' src='assets/logo.png' alt='logo ' />
        </div>
        <nav>
          <ul>
            <li>
              <a href='./index.html'>Home</a>
            </li>
            <li>
              <a href='#'>Categories</a>
            </li>
            <li>
              <a href='#'>Login/SignUp</a>
            </li>
          </ul>
        </nav>
        <a className='ham-burger' onclick='sideBarShow()'>
          <i className='fa fa-bars'></i>
        </a>
        <sidebar className='navsidebar'>
          <span>
            {" "}
            <a href='./index.html'>Home</a>{" "}
          </span>
          <span>
            {" "}
            <a href='#'>About</a>{" "}
          </span>
          <span>
            {" "}
            <a href='#'>Github</a>{" "}
          </span>
        </sidebar>
      </div>
    </div>
  );
};

export default Navbar;
