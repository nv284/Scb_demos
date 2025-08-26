import React, { useState } from "react";

function NewForm (){
    const[name , setName] = useState('');
    const [error , setError] = useState('');

    //form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if(name.trim() === ''){
            setError('Please enter your name');
        }else{
            setError('');
            alert(`Form submitted Name : ${name}`);
        }
    };

    //handle input change
    const handleChange = (e)=>{
        setName(e.target.value);
        if(e.target.value.trim() !== ''){
            setError('');
        }
    };
    return(
        <div>
            <h2>Enter your name </h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text"  value={name} onChange={handleChange}></input>
                {error && (<div>{error}</div>)}

             <button type="submit">submit</button>
            </form>
        </div>
    )

}
export default NewForm;
