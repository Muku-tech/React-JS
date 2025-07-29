import React,{useState} from "react";

function MyComponent(){

    const[cars,setCars]=useState([]);
    const[carName,setName]=useState("");
    const[carPrice,setPrice]=useState("");
    const[carYear,setCarYear]=useState(new Date().getFullYear());

    function handleAddCar(){
        const newCar={name:carName, price:carPrice, year:carYear }
        setCars(c=>[...cars,newCar]);
        setCarYear(new Date().getFullYear());
        setName("");
        setPrice();

    }

    function handleRemoveCar(index){
        setCars(c=>c.filter((_,i)=>i!==index))

        

    }

    function handleName(event){
        setName(event.target.value);

    }
    function handlePrice(event){
        setPrice(event.target.value); 

    }
    function handleYear(event){
        setCarYear(event.target.value);

    }

    return(
        <div>
            <h2>Lists of cars</h2>
            <ul>
                {cars.map((car,index)=>
                <li key={index} onClick={()=>handleRemoveCar(index)}>{car.year} {car.name} {car.price}</li>
                )}

            </ul>
            <input type="number" value={carYear} onChange={handleYear}/><br />
            <input type="text" value={carName} onChange={handleName}/><br />
            <input type="number" value={carPrice} onChange={handlePrice}/><br />
            <button onClick={handleAddCar}>Add Car</button>
        </div>
    )
}

export default MyComponent