import React from 'react'
import NavbarR from '../../../components/navbarResponsible/NavbarR'
import Comments from '../comments/Comments'
import '../List/listEmployees.css';

function ListEmployees() {
  return (
    <div className='.containerList'>
      <NavbarR/>
      {/* <Comments/> */}
      <h1>cards de trabajadres que tiene a cargo</h1>
    </div>
  )
}

export default ListEmployees
