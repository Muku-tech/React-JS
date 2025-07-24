function List(){
    const fruits=[{id:1,name:"apple",calories:95},
                  {id:2,name:"Banana",calories:45},
                  {id:3,name:"pineapple",calories:37},
                  {id:4,name:"Coconut",calories:105},
                  {id:5,name:"orange",calories:47}];   //{} is added in each array to convert them in object

                  //fruits.sort((a,b)=>a.name.localeCompare(b.name)); //This is in alphabetical order
                  //fruits.sort((a,b)=>b.name.localeCompare(a.name));  //This is reverse order
                  //fruits.sort((a,b)=>a.calories-b.calories); //order based on calories




    //const lowCalFruits =fruits.filter(fruit=>fruit.calories<100);

    ///const listitems=lowCalFruits.map(lowCalFruit=> <li key={lowCalFruit.id}>{lowCalFruit.name},<b>{lowCalFruit.calories}</b></li>)


   const listitems = fruits.map(fruit=><li key={fruit.id}>{fruit.name},<b>{fruit.calories}</b></li>)
    return(<ul>{listitems}</ul>)

}
export default List