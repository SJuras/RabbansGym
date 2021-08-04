import React from 'react';
import { Link } from 'react-scroll';

function Header(){
  return(
    <div id="main">
      <div className="header-heading">
        <h2>STEP UP YOUR</h2>
        <h1><span>FITNESS</span> WITH US</h1>
        <p className="details">To Look Like a Fighter<br />You Must <span>Train</span> Like a Fighter</p>
        <div className="header-btns">
          <Link to="contact" smooth={true} duration={1000} className="header-btn">JOIN US</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
