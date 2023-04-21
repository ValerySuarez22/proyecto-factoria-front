import React from 'react';
import NavbarR from '../../../components/navbarResponsible/NavbarR';
import Cards from '../../../components/cards/Cards';
import '../list/listEmployees.css';


function ListEmployees() {
  return (
    <div className='containerList'>
      <NavbarR/>
      <Cards/>
    </div>
  )
}

export default ListEmployees
