import React from 'react';
import { Link } from 'react-scroll';


function About(props){
  return(
    <div id="about">
      <div className="about-image">
        <img src={props.image} alt="about" />
      </div>
      <div className="about-text">
        <img src={props.image2} alt="rabbans gym logo"/>
        <h1> {props.title} </h1>
        <p> {props.text} </p>
        <p> {props.text2} </p>
        <Link to="contact" smooth={true} duration={1000}>
          <button>JOIN US</button>
        </Link>
      </div>
    </div>
  );
}

export default About;
