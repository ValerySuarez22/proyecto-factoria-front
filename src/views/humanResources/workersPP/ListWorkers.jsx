import React, { useEffect, useState } from 'react'
import Navbar from '../../../components/navbar-HHRR/Navbar';
import '../workersPP/listWorkers.css'
import Cards from '../../../components/cards/Cards';
import customActions from '../../../components/actions';

const ListWorkers = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    customActions()
      .then(result => {
        console.log('result', result)
        setUser(result)
      })
  }, [])

  return (
    <div className='containerList'>
      <Navbar user={user} />
      <Cards user={user} />
    </div>
  )
}

export default ListWorkers
