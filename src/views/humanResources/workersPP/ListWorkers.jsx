import React, { useState, user } from 'react'
import Navbar from '../../../components/navbar-HHRR/Navbar';
import '../workersPP/listWorkers.css'
import Cards from '../../../components/cards/Cards';

const ListWorkers =() => {
  const [user, setUser] = useState({});
  return (
    <div className='containerList'>
      <Navbar user={user} />
      <Cards/>
    </div>
  )
}

export default ListWorkers
