import React, { useEffect } from 'react'
import Navbar from '../../../components/navbar-HHRR/Navbar';
import "../homeRRHH/home.css";

const Home = () =>{


  useEffect(()=>{
  const username= JSON.parse(localStorage.getItem('loggedAppUser'))
  console.log(username)
  },[])

  return (
    <div className='contanierHome'>
        <Navbar/>
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
