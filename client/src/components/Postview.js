import Header from "./Header"
import axios from "axios"
import { useState,useEffect } from "react"
import like from "./like1.png";
const address="http://localhost:3001"
const Postview =()=>{
    const [data,setpost]=useState([])
    useEffect(()=>{
        axios.get(address)
        .then((res)=>{setpost(res.data)})
        .catch((err)=>{console.log(err)})
    },[])
    return(
        <>
        <Header/>
        {
            data.map((user,i)=>{
                const base64str=btoa(
                    new Uint8Array(user.image.data.data).reduce(function(data,byte){
                        return data+String.fromCharCode(byte)
                    },"")
                );
                return (
                    <div className='content' key={i}>
                    <div >
                        <header id='head'>
                          <div  >
                            <h3 className='name_loc'>{user.author}</h3>
                            <h4 className='name_loc' style={{fontWeight:'100'}} >{user.location}</h4>
                          </div>
                            <h2 style={{margin:'0px'}}>...</h2>
                        </header>
                    </div>
                    <div>
                    <img className='image' src={`data:image/png;base64,${base64str}`} alt={"err"} />
                    </div>
                    <div id='footer'>
                      <div id='footer_flex'>
                        <div >
                          <img className='like_share' src={like} alt=''></img>
                          <img className='like_share' src='https://cdn0.iconfinder.com/data/icons/simple-line-design/100/Fast_delivery-512.png' alt=''></img>
                        </div>
                        <h6 style={{margin:'1px'}} className='date'>{user.date}</h6>
                      </div>
                      <h6 style={{margin:'10px 4px'}} className='likes'>{user.like} likes</h6>
                      <h4 style={{margin:'10px 4px'}}>{user.description}</h4>
                    </div>
                    </div>
                )


            })
        }
        
        </>
    )
}
export default Postview