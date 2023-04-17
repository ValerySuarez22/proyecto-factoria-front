import React from 'react'
import Navbar from '../../../components/navbar-HHRR/Navbar';
import "../homeRRHH/home.css";

const Home = () =>{
  return (
    <div className='contanierHome'>
        <Navbar/>
        {/* <div className='titleHome'><h1>Hola Paula</h1></div> */}
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
