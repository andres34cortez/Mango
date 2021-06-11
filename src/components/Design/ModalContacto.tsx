import React from "react";
import './ModalContacto.css'
import { Row, Col, Box } from "jsxstyle";
import { Checkbox } from "@material-ui/core";
import Button from "../Button/button";


const ModalContacto = () => {
  return (
   <Col className="contenedor1">
        
           <Col className="contenedor2"  >
                
               
                <input className="input" type="text" placeholder="Nombre"/>
               
               
                <input className="input" type="text" placeholder="Correo" />
                
              
                <textarea className="box"  placeholder="Comentario"/>
                
              
              <Checkbox className="check"></Checkbox> Acepto los Terminos y condiciones
              
              
                <Button></Button>
                
            </Col>
       
    
   </Col>
  
  );}


export default ModalContacto;
