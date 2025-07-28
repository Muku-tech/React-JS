import React,{useState} from "react";

/*function MyComponent(){
    const[count,setCount]=useState(0);

    function increment(){
        setCount(c=>c+1);    
        setCount(c=>c+1);           //Here arrow function is used to update the value of c in each line
        setCount(c=>c+1);
    }

    function decrement(){
        setCount(c=>c-1);
        
    }

    function reset(){
        setCount(0);
    }

    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )



}*/

function MyComponent(){
    const[car,setCar]=useState({year:2025,
        make:"Toyota",
        model:"Camry"
    });
    function handleYearChange(event){
        setCar(c=>({...c,year:event.target.value}));         //...c is an spread operator
    }
    function handleModelChange(event){
        setCar(c=>({...c,model:event.target.value}));         //...c is an spread operator
    }
    function handleMakeChange(event){
        setCar(c=>({...c,make:event.target.value}));         //...c is an spread operator
    }

    return(
        <div>
            <p>Your Favourite car is: {car.make} {car.model} {car.year}</p>

            <input type="text" value={car.make} onChange={handleMakeChange}/><br />
            <input type="text" value={car.model} onChange={handleModelChange}/><br />
            <input type="number" value={car.year} onChange={handleYearChange}/><br />
        </div>
    )
}

export default MyComponent;