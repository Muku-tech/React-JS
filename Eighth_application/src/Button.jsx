function Button(){
    
    const handleClick=(e)=>e.target.textContent="OUCHH!!";         //e is an event
    return(<button onDoubleClick={(e) =>handleClick(e)}>ClickMe</button>)



    /*let count=0;

    const handleClick=(name)=>{
        if(count<3){
            count++;
            console.log(`${name} you clicked me ${count} times!`);
        }
            else{
                console.log(`${name} Stop clicking me!!`);
            }
    }

    return(<button onClick={()=>handleClick("Muku")}>Click me</button>)*/



    //const handleClick=()=>console.log("OUCH!!");
    //return <button onClick={handleClick}>Click me</button>;

    //const handleClick2=(name)=>console.log(`${name} stop clicking me`);
    //return(<button onClick={()=>handleClick2("Muku")}>Click Me</button>)
}

export default Button;