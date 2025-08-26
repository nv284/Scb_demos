import React , {useState, useEffect} from "react";

function Timer(){
    const[count, setCount] = useState(0);
    //componentDidmount
    useEffect(()=>{
        console.log('Component mounted');
        //component willunMount
    return()=>{
        console.log('Component  will unmounted');
    }
    } ,[]); //empty array = run once

    //componentdidupdate
    useEffect(()=>{
        console.log(`count update to ${count}`);
    },[count]);//runs every time 'count ' changes
    return(
        <div>
            <p>count:{count}</p>
            <button  onClick={()=>setCount(count+1)} >Increment</button>
        </div>
    );
}

export default Timer;