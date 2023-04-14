
import React, { useState, useEffect } from "react";
import "./cards.css";
import picture from "../../assets/images/auri.png";

function Cards() {
  const [repo, setRepo] = 
  useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/dashboard/api/employees/data')
    .then(response => 
      response.json())
    .then(repo =>
      setRepo(repo))
      .catch(error =>
        console.error
        (error));
  }, []);

    
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