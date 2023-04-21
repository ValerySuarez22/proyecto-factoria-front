import React from 'react'
import NavbarR from '../../../components/navbarResponsible/NavbarR'
import Comments from '../comments/Comments'
import Cards from '../../../components/cards/Cards'


function ListEmployees() {
  return (
    <div className='.containerList'>
      <NavbarR/>
      <Cards/>
    </div>
  )
}

export default ListEmployees
