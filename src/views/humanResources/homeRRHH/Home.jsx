import React, { useEffect, useState } from 'react'
import Navbar from '../../../components/navbar-HHRR/Navbar';
import "../homeRRHH/home.css";
import axios from '../../api/axios';
import customActions from '../../../components/actions';

const Home = () =>{

  const [user, setUser] = useState({});
  
  useEffect(()=>{
   Promise.resolve (customActions())
   .then(result => {
    console.log(result, 'loquesea')
    setUser(result)
   })
  },[])


  return (
    <div className='containerHome'>
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
