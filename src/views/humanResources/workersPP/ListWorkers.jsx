import React from 'react'
import Navbar from '../../../components/navbar-HHRR/Navbar';
import '../workersPP/listWorkers.css'
import Cards from '../../../components/cards/Cards';

function ListWorkers() {
  return (
    <div className='containerList'>
      {/* <Navbar/> */}
      <Cards/>
    </div>
  )
}

export default ListWorkers
