import React from "react";
import "./button.css";
const Button = ({ text }) => {
  return (
    <div>
      <button className='primary-btn margin-top-1 font'>
        {text}
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
};

export default Button;
