import React from 'react';



function Featurebox(props){
  return(
    <div className="a-box">
      <div className="a-b-img">
        <img src={props.image} alt="" />
      </div>
      <div className="a-b-text">
        <h3> {props.title} </h3>
        <p> {props.text} </p>
      </div>
    </div>
  );
}

export default Featurebox;
