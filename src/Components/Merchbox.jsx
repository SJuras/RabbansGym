import React from 'react'
import { FaIoxhost } from "react-icons/fa";


function Merchbox(props){
  return(
    <div className="merch-box">
      <div className="merch-box-img">
        <img src={props.image} />
      </div>
      <div className="merch-box-text">
        <h3> {props.title} </h3>
        <h4> {props.tag} </h4>
        <p> {props.description} </p>
        <div className="merch-box-price">
          <p><FaIoxhost style={{marginBottom: "-2px", fontSize: "16px"}} /> {props.price} </p>
        </div>
      </div>
    </div>
  );
}

export default Merchbox;
