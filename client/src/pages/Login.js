import axios from 'axios'
import React, { useState } from 'react'
import Cookies from "universal-cookie"
import {v4 as uuidv4} from "uuid"
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const Login = ({setUser}) => {
    const cookies = new Cookies();
    const navigate = useNavigate();
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
   const log = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/adminlogin" ,{name, password})
    .then((res)=>{
        if(res.data==="no user found"){
            Swal.fire({
                title: "Your not an Admin!",
                icon: "error"
              })
        }else{
            if(res.data === "success"){
                cookies.set("admin",uuidv4())
                setUser(cookies.get("admin"))
                navigate("/adminpanel")
                
            }else{
                Swal.fire({
                    title: "Wrong Credentials!",
                    icon: "error"
                  })
            }
        }
    })
   }
  return (
    <div className='dark:bg-[#27374D] bg-[#DDE6ED] text-white flex justify-center items-center h-[90vh]'>
        <form className='flex rounded-2xl flex-col items-center w-72 h-60 bg-[#27374D] dark:bg-[#526D82] border shadow-5xl shadow-[#27374D] dark:shadow-md dark:shadow-[#DDE6ED]' onSubmit={log}>
            <p className='text-2xl font-serif tracking-wider font-bold mt-6'>LOGIN</p>
            
            <input 
                placeholder="Admin name" 
                className='w-[85%] mt-3  md:h-6 text-lg outline-none bg-transparent placeholder:text-zinc-100 text-center border-b-2 border-zinc-100 placeholder:font-semibold' 
                onChange={(e)=>setName(e.target.value)}
            />

           <input 
              placeholder="Password" 
              type="password"
              className='w-[85%] mt-4 md:h-6 text-lg outline-none bg-transparent placeholder:text-zinc-100 text-center border-b-2 border-zinc-100 placeholder:font-semibold'  
              onChange={(e)=>setPassword(e.target.value)} 
            />

           <button className='w-[90%] mt-4  bg-white/10 dark:border dark:hover:bg-[#27374D] hover:bg-[#9DB2BF] outline-none  text-center text-zinc-100 font-semibold  h-12 md:h-10 text-lg md:text-md rounded-2xl md:rounded-xl border'  type="submit">Login</button>
          
        </form>
    </div>
  )
}

export default Login