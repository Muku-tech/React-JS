import React, {useState} from 'react';

function MyComponent(){

    const [name,setName] =useState("Guest");
    const [age,setAge]=useState(0);
    const [isEmployed,setIsEmployed]=useState(false);

    const updateName=()=>{
        setName("John");
    }
    const updateAge=()=>{
        setAge(age+1);
    }
    const toggleEmployee=()=>
        setIsEmployed(!isEmployed)


    return(
    <div>
        <p>Name:{name}</p>
        <button onClick={updateName}>Set Name</button>

        <p>Age:{age}</p>
        <button onClick={updateAge}>Increment Age</button>

        <p>Is Employed?: {isEmployed ? "Yes" : "No"}</p>
        <button onClick={toggleEmployee}>Toggle Status</button>

    </div>)

}
export default MyComponent;