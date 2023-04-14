import React, { useEffect, useState } from 'react'
import "./cards.css";
import picture from "../../assets/images/auri.png";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Cards = () => {
  const [user, setUser] = useState([
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
    ])
  // useEffect(() =>{
  //   fetch("http://127.0.0.1:8000/api/employee")
  //   .then(respuesta => respuesta.json())
  //   .then(data => setUser( data))

  // },[]);
  
  const link = () => {
    

  }
  return (
  // {user.map((obj,index) => 
  
  <div className="cardContainer" onClick={link} style={{cursor:'pointer'}}> 
      <div className="cardLeft">
        <div className="frame">
          <img className="picture" src={picture} alt="" />
          
        </div>
      </div>
      <div className="cardRight">
        {user.length > 0 && `${user[0].name} -- ${user[0].email}`}
      {/* {<Link to = "../"> */}
        {/* {<p> */}
        {/* {{obj.name} {obj.lastname}  */}
        {/* {</p> */}
        {/* {</Link> */}
      </div>
    </div>
    
  //)
  );
}

export default Cards