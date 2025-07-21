function UserGreeting1(props){

    return(props.isLoggedin ? <h2 className="welcome-message">Hello! {props.Username}</h2> : <h2 className="Login-prompt">Please Login</h2>)      /*This is a ternary process*/
}
export default UserGreeting1