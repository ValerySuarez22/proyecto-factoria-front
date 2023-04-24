import React, { useEffect, useState } from 'react'
import NavbarR from '../../../components/navbarResponsible/NavbarR';
import customActions from '../../../components/actions';
import CardResponsible from '../../../components/cardResponsible/CardResponsible';
import '../list/listEmployees.css';

const ListEmployees = () => {

  const [user, setUser] = useState({});


  useEffect(() => {
    customActions()
      .then(result => {
        setUser(result)
      })
  }, [])

  return (
    <div className='containerList'>
      <NavbarR user={user} />
      <CardResponsible user={user} />
    </div>
  )
}

export default ListEmployees
