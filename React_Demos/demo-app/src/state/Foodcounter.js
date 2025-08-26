import React, { useState } from "react";

export function Foodcounter(){
    const[count , setCount] = useState(0);
    const[name,setName] = useState("ABC"); //name === "ABC"
        return(
            <div>
            <p>Count:{count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>

            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}>
            </input>
          <p>Hello , {name}</p>
        </div>
        
    );
}