import React from 'react'
import NavbarR from '../../../components/navbarResponsible/NavbarR';
import '../comments/comments.css';

function Comments() {
  return (
    <div>
      {/* <NavbarR /> */}
      <h1>cards del trabajador</h1>
      <div className="comment-field">
      <textarea placeholder="Escribe tu comentario aquí"></textarea>
      <button>Enviar</button>
    </div>
    </div>
  )
}

export default Comments
