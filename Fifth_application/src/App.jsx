import UserGreeting from './UserGreeting';
import UserGreeting1 from './UserGreeting1';

function App(){
  return(
    <>
    <UserGreeting isLoggedIn={true} username="Mukunda"/>
    <UserGreeting1 isLoggedin={true} Username="Muks"/>
    </>
  )
}

export default App