import React from 'react';
import './button.css';

interface Props{
    text:string;
    top?:string;
    left?:string;
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