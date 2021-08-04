import React from 'react';
import { Link } from 'react-scroll';


function About2(props){
  return(
    <div id="about2">
      <div className="about-image">
        <img src={props.image} alt="about" />
      </div>
      <div className="about-text">
        <h1> {props.title} </h1>
        <p> {props.text} </p>
        <p> {props.text2} </p>
        <p> {props.text3} </p>
        <Link to="contact" smooth={true} duration={1000}>
          <button>START NOW</button>
        </Link>
      </div>
    </div>
  );
}

export default About2;
