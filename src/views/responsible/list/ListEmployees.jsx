import React, { useEffect, useState } from 'react'
import NavbarR from '../../../components/navbarResponsible/NavbarR';
import customActions from '../../../components/actions';
import CardResponsible from '../../../components/cardResponsible/CardResponsible';
import '../list/listEmployees.css';

const ListEmployees = () => {

  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    customActions()
      .then(result => {
        setUser(result)
        setIsLoading(false);
      })
  }, [])

  return (
    <div className='containerList'>
      <NavbarR user={user} />
      <CardResponsible user={user} loading={isLoading} />
    </div>
  )
}

export default ListEmployees
