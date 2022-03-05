import React from "react";
import "./footer.css";

const Footer = () => {
  const getYear = () => new Date().getFullYear();
  return (
    <>
      <footer>
        <div className='footer-content'>
          <div>
            <h3 className='footer-heading'>Quiz Of Thrones</h3>
          </div>
          <div className='footer-links'>
            <span>About Us</span>
            <span>Categories</span>
            <span>Contact Us</span>
            <span>Privacy Policy</span>
          </div>
          <div className='footer-copyright'>
            Copyright © {getYear()} Quiz Of Throne. All Rights Reserved
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
