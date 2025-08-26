import React,{useState} from "react";

function DynamicList(){
    const[items , setItems] = useState([]);
    const [input , setInput] = useState('');

        const addItem=()=>{
              if(input.trim() !== ''){
                setItems([...items,input]);
                setInput('');
              }
        };

    return(
          <div>
            <h2>Todo List</h2>
            <input value={input} onChange={(e)=>setInput(e.target.value) } placeholder="Add items"></input>

            <button onClick={addItem}>Add</button>

            <ul>
                {items.map((item , index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
          </div>
    )
}

export default DynamicList;