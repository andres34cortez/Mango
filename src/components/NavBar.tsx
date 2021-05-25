import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css'

 const NavBar =() =>{
     return(
    <div className="navContainer">
        <Link className="navLink" to="/">
         <h1>Inicio</h1>
        </Link>
        <Link className="navLink" to="/servicios">
         <h1>Servicios</h1>
        </Link>
        <Link className="navLink" to="/proyectos">
         <h1>Proyectos</h1>
        </Link>
        <Link className="navLink" to="/contacto">
         <h1>contacto</h1>
        </Link>
    </div>
     )
 }

 export default NavBar;