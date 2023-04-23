import React, { useEffect, useState } from 'react'
import Navbar from '../../../components/navbar-HHRR/Navbar';
import '../workersPP/listWorkers.css'
import Cards from '../../../components/cards/Cards';
import customActions from '../../../components/actions';

const ListWorkers = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    customActions()
      .then(result => {
        console.log('result', result)
        setUser(result)
        setIsLoading(false);
      })
  }, [])

  return (
    <div className='containerList'>
      <Navbar user={user} />
      {isLoading ? (
        <div className='loading-list-workers'>
          <p className='loading-cards'>Un momento, por favor.<br /> Los datos se están cargando...</p>
          <div className="spinner">
            <div class="double-bounce1"></div>
            <div class="double-bounce2"></div>
          </div>
        </div>
      ) : (
      <Cards user={user} />
      )}
    </div>
  )
}

export default ListWorkers
