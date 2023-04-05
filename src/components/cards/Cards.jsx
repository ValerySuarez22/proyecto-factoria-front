import React from "react";
import "./cards.css";
import picture from "../../assets/images/auri.png";

function Cards() {
  // aqui entre los parentesis tiene que ir el objeto trabajador
  return (
    <div className="cardContainer">
      <div className="cardLeft">
        <div className="frame">
          <img className="picture" src={picture} alt="" />
          // remplazar el nombre trabajador por el nombre correcto y borrar
          comillas
        </div>
      </div>
      <div className="cardRight">
        <p>
          {"trabajador.nombre"}// remplazar el nombre trabajador por el nombre
          correcto y borrar comillas
        </p>
      </div>
    </div>
  );
}

export default Cards;
