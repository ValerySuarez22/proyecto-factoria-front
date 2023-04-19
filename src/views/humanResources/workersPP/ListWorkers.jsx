import React from 'react'
import Navbar from '../../../components/navbar-HHRR/Navbar';
import '../workersPP/listWorkers.css'
import Cards from '../../../components/cards/Cards';

function ListWorkers() {
  return (
    <div className='containerList'>
      {/* <Navbar/> */}
      <h1 className='title-employee'>cards trabajadres preriodo de prueba</h1>
      <Cards/>
    </div>
  )
}

export default ListWorkers
