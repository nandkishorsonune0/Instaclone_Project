import Header from "./Header"
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { useState } from "react"
import Moment from 'moment';
const address="http://localhost:3001/post";
//const herokus="https://server-for-insta-10x.herokuapp.com/post"

const Form=()=>{
    const date = Moment().format("DD MMM YYYY");
    const [data,setdata]=useState({})
    const [image,setimage]=useState('')
    const navigate =useNavigate()
    const hover={
        backgroundColor:"#2d92d1",
        color:"white",
        height:"1.5rem",
        border: "none"
    }
    const handlesubmit=(e)=>{
        e.preventDefault()
        let formData=new FormData()
        formData.append('testimage',image)
        formData.append('name',data.author)
        formData.append('location',data.location)
        formData.append('description',data.description)
        formData.append('date',date)
        axios.post(address,formData,{headers:{"Content-type":"multipart/form-data"},}).then((res)=>{
            console.log("success")
            navigate("/postview")
        }).catch((err)=>{
            console.log(err)
        })
    }
    function SubmitButton(){
        if (Object.keys(data).length===3 && image){
          return (
            <div className="buttonbody">
            <input className="submitbutton" type={"button"} value='Post' style={hover} onClick={handlesubmit}/>
            </div>
          )
        } else {
          return (
            <div className="buttonbody">
                <button className="submitbutton" type="button" disabled>Post</button>
            </div>
          )
        };
      };
    return(
        <>
        <Header/>
        <div className="formtocenter">
        <form className="formbody">
        <span>
            <input type={"file"} name="testimage" onChange={(e)=>{setimage(e.target.files[0])}}/>
        </span>
            <div className="nameloc">
                <input type={"text"} className='authloc' placeholder="Author" onChange={(e)=>{setdata({...data, author: e.target.value})}} />
                <input type={"text"} className='authloc' placeholder="Location" onChange={(e)=>{setdata({...data, location: e.target.value})}} />
            </div>
            <input type={"text"} placeholder="Description" onChange={(e)=> {setdata({...data, description: e.target.value})}} />
            <br/>
        <SubmitButton/>  
        </form>
        </div>

        </>
    )
}
export default Form