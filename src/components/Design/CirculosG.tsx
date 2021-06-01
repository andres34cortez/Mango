import React from "react";
import Rocket from "../../assets/Rocket.png"

interface Props {
  width: string;
  height: string;
  color: string;
  rigth?:string;
  top?:string;
}

const CircleG = (props: Props) => {
  return (
      
    <div
      className="circleContainer"
      style={{
          position:"absolute",
        width: `${props.width}`,
        height: `${props.height}`,
        backgroundColor: `${props.color}`,
        right:`${props.rigth}`,   
        top:`${props.top}`,
      }}


    >

<div style={{position:"absolute" }}>
        <img src={Rocket} />
      </div>

    </div>
  );
};

export default CircleG;
