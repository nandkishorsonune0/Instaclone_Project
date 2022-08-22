import "./style.css"
import {useNavigate } from "react-router-dom"
const Header=()=>{
    const navigate=useNavigate()
    const handleclick=()=>{
        navigate("/form")
    }
    return(
        <>
        <header id='header'>
            <span id='name'>
            <img className='logo_icon' src='https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-instagram-photo-camera-logo-outline-svg-png-icon-17.png' alt='' ></img>
            <h1 id='app_name' >Instaclone</h1>
            </span>
            <img className='logo_icon' onClick={handleclick} src='https://banner2.cleanpng.com/20190829/pbo/transparent-app-icon-camera-icon-image-icon-5d6788a180b701.0518543115670662735272.jpg' alt=''></img>
        </header>
        </>
    )
}
export default Header