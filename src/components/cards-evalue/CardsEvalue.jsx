import React from "react";
import "./cardsevalue.css";
import picture from "../../assets/images/auri.png";

function Cards() {
  // aqui entre los parentesis tiene que ir el objeto trabajador
  return (
    <div className="cardContainer1">
      <div className="cardLeft1">
        <div className="frame1">
          <img className="picture1" src={picture} alt="" />
          // remplazar el nombre trabajador por el nombre correcto y borrar
          comillas
        </div>
      </div>
      <div className="cardRight1">
        <p>
          {"trabajador.nombre"}// remplazar el nombre trabajador por el nombre
          correcto y borrar comillas
        </p>
      </div>
    </div>
  );
}

export default Cards;