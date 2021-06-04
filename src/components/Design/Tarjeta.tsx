import React from 'react';
import './Tarjeta.css';

interface Props{
    imagen:string;
    texto:string;
    subtexto:string;
    top:string;
    left:string
}
const Button=(props:Props)=>{
return(

    <div className="Button" 
    style={{
        top:`${props.top}`,
        left:`${props.left}`,
        position:"absolute"
    }}
    >
       <h1 className="texto"> {props.text}</h1>
       <h3>Agenda una llamada para que podamos asesorarte</h3>
    </div>
)
};
export default Button;