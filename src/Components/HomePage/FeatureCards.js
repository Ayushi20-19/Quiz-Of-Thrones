import React from "react";
import "./featurecards.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const FeatureCards = () => {
  return (
    <>
      <div className='featureWrapper'>
        <h1 className='featureHeading'>Excited to play?</h1>
        <div className='cardMainWrapper'>
          <div className='cardWrapper'>
            <div className='cardImg'>
              <img
                src='https://images.unsplash.com/photo-1531167599833-609a45d3d903?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bGV2ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60'
                alt='img'
              />
            </div>
            <div className='cardContent'>
              <span>
                Level Bases Quiz <ArrowRightAltIcon />
              </span>
            </div>
          </div>
          <div className='cardWrapper'>
            <div className='cardImg'>
              <img
                src='https://images.unsplash.com/photo-1614907884263-9409f5a11875?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHRpbWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
                alt='img'
              />
            </div>
            <div className='cardContent'>
              <span>
                Time Bases Quiz <ArrowRightAltIcon />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureCards;
