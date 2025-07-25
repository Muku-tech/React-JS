import List from './List.jsx'

function App(){
  const fruits=[{id:1,name:"apple",calories:95},
                {id:2,name:"banana",calories:105},
                {id:3,name:"cherry",calories:45},
                {id:4,name:"date",calories:66},
                {id:5,name:"elderberry",calories:32}];


  const vegetables=[{id:6,name:"potatoes",calories:110},
                    {id:7,name:"bananacelery",calories:15},
                    {id:8,name:"carrots",calories:25},
                    {id:9,name:"corn",calories:66},
                    {id:10,name:"broccoli",calories:50}];
                return(<>
                <List items={fruits} category="Fruits"/>
                {fruits.length>0 && <List items={fruits} category="Fruits"/>}    
              <List items={vegetables} category="Vegetables"/>
              </>);

}
export default App