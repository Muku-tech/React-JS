function ProfilePicture(){

    const imageurl='./src/assets/Profile.jpg';

    const handleClick=(e)=>e.target.style.display="none";     //here we access the event object
    
    return(<img onClick={(e)=>handleClick(e)} src={imageurl}></img>)


}
export default ProfilePicture