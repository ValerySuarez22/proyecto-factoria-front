import React from "react";
import "./cards.css";
import picture from "../../assets/images/auri.png";

function Cards() {
  [
    {
    "id": 1,
    "name": "dsfs",
    "lastname": "dgg",
    "email": "gfgd",
    "rol": 1,
    "identifying": "gfdgdf",
    "team": 1,
    "position": 1,
    "area": 1,
    "typeOfContract": 1,
    "startDate": {
    "date": "2023-02-01 00:00:00.000000",
    "timezone_type": 3,
    "timezone": "Europe/Berlin"
    },
    "finishDate": {
    "date": "2023-03-13 00:00:00.000000",
    "timezone_type": 3,
    "timezone": "Europe/Berlin"
    },
    "manager": "fdhd",
    "photo": "fdhdh",
    "status": 1
    },
    {
    "id": 2,
    "name": "hfj",
    "lastname": "hgf",
    "email": "fgjf",
    "rol": 1,
    "identifying": "fjgfjg",
    "team": 1,
    "position": 1,
    "area": 1,
    "typeOfContract": 1,
    "startDate": {
    "date": "2018-01-01 00:00:00.000000",
    "timezone_type": 3,
    "timezone": "Europe/Berlin"
    },
    "finishDate": {
    "date": "2018-01-01 00:00:00.000000",
    "timezone_type": 3,
    "timezone": "Europe/Berlin"
    },
    "manager": "fjg",
    "photo": "fjg",
    "status": 1
    }
    ]
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
