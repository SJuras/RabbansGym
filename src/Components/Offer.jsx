import React from 'react';
import { Link } from 'react-scroll';


function Offer(){
  return(
    <div id="offer">
      <div className="pr-heading">
        <h2>MEMBERSHIP FEE NOW AT <span>40%</span> DISCOUNT</h2>
        <p className="details">Get Your Membership Today</p>
        <div className="pr-btns">
          <Link to="contact" smooth={true} duration={1000} className="header-btn">JOIN NOW</Link>
        </div>
      </div>
    </div>
  );
}

export default Offer;
