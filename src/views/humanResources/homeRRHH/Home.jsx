import React, { useEffect, useState } from 'react'
import Navbar from '../../../components/navbar-HHRR/Navbar';
import "../homeRRHH/home.css";
import axios from '../../api/axios';

const Home = () =>{

  const [user, setUser] = useState({});
  
  useEffect(()=>{
  const dataemail= JSON.parse(localStorage.getItem('loggedAppUser'))
  console.log(dataemail) 
  axios.get("http://127.0.0.1:8000/api/employee")
  .then(async rest =>{
    console.log(rest.data)
    const findUser=rest.data.find(obj => obj.email === dataemail.username)
    console.log(findUser)
    const rese = await fetch(
      `http://127.0.0.1:8000/api/employee/${findUser.id}/photo`
    );
    const blob = await rese.blob();
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      findUser.photo = reader.result;
      setUser(findUser);
    };
  })
  },[])

  return (
    <div className='contanierHome'>
        <Navbar user={user} />
        <div className="container">
          <h2>Agenda del Día</h2>
          <section className="agenda">
            {/* Renderiza la agenda del día desde otro componente de calendario */}
            {/* <Calendar /> */}
          </section>
          <div className="calendar-container">
            {/* Renderiza el calendario pequeño con estilos de glasmorfismo */}
            <div className="calendar">
              {/* Contenido del calendario */}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home
