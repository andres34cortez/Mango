import React from 'react';
import './button.css';

interface Props{
    text:string;
}
const Button=(props:Props)=>{
return(

    <div className="Button">
       <h1 className="texto"> {props.text}</h1>
    </div>
)
};
export default Button;