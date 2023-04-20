import React, { useState, useEffect } from 'react'
import Navbar from '../../../components/navbar-HHRR/Navbar';
import HighForm from '../../../components/highForm/HighForm';
import '../register/register.css';
import customActions from '../../../components/actions';


const Register = () => {
  const [user, setUser] = useState({});
  useEffect(()=>{
    Promise.resolve (customActions())
    .then(result => {
     setUser(result)
    })
   },[])
  return (
    <div className='containerRegister'>
      <Navbar user={user}/>
      <HighForm/>
    </div>
  )
}

export default Register

