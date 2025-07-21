import Student from './Student.jsx'

function App(){
  return(
    <>
    <Student name="John" age={32} isStudent={true}/> 
    <Student name="Jordi" age={45} isStudent={false}/>
    <Student name="Danny" age={25} isStudent={false}/>
    </>
  )
}

export default App