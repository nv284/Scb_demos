import React from "react";
import './Greeting.css';

function Greeting(props){
return <h2 className="greeting"> Hello , {props.name} !</h2>
}

export default Greeting;