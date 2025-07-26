import React,{useState} from 'react'

function Counter(){
    const[count,setCount]=useState(0);

    const increment=()=>{
        setCount(count+1)
    }
    const Decrement=()=>{
        setCount(count-1)
    }
    const reset=()=>{
        setCount(0)
    }

    return(
        <div className='counter-container'>
            <p className='count-display'>Count: {count}</p>
            <button className='counter-button' onClick={increment}>Increase</button>
            <button className='counter-button' onClick={Decrement}>Decrease</button>
            <button className='counter-button' onClick={reset}>Reset</button>
        </div>
    )


}
export default Counter