import React from "react";
import picture from "../../assets/images/image_4.png";
import "./cardssedes.css";

function CardsSedes() {
  // aqui entre los parentesis tiene que ir el objeto trabajador
  return (
    <div className="cardContainer2">
      <div className="cardLeft2">
        <div className="frame2">
          <img className="picture2" src={picture} alt="" />
          // remplazar el nombre trabajador por el nombre correcto y borrar
          comillas
        </div>
      </div>
      <div className="cardRight2">
        <p>
          {"trabajador.nombre"}// remplazar el nombre trabajador por el nombre
          correcto y borrar comillas
        </p>
      </div>
    </div>
  );
}

export default CardsSedes
