import React from "react";
import Button from "../Button/Button";
import "./herosection.css";

const HeroSection = () => {
  return (
    <>
      <div className='heroMain'>
        <div className='heroContentWrapper'>
          <div className='heroContent'>
            <h1>Quiz Of Thrones</h1>
            <Button text={"Get the Throne"} />
          </div>
        </div>

        <div className='heroImageWrapper'>
          <div className='heroImage'></div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
