import axios from 'axios';
import React, { useState } from 'react'
import Swal from "sweetalert2"
import {useNavigate} from "react-router-dom"

const ChangePassword = () => {

    const[name,setName] = useState("");
    const[newPassword,setNewPassword] = useState("");
    const[password,setPassword] = useState("");
    const navigate = useNavigate();

    const handlePasswordChange =(e)=>{
        e.preventDefault();
        axios.post("http://localhost:5000/change",{name,password,newPassword}).then((res)=>{
            if(res.data === "changed"){
              
              Swal.fire({
                title: "Password Changed Successfully!",
                icon: "success"
              })
              navigate("/adminpanel")
              
            }else if(res.data==="not"){
              Swal.fire({
                title: "Something Went Wrong!",
                icon: "error"
              })
            }
            else{
              Swal.fire({
                title: "Wrong Credentials!",
                icon: "error"
              })
            }
        })

    }
  return (
    <div className='flex  h-full justify-center'>
        
        <form className='w-80 md:w-96 h-72 flex text-xl text-[#27374D] flex-col items-center sm:mt-16  mt-[20%]' onSubmit={handlePasswordChange}>
           <input placeholder='Admin Name' className='w-[85%] outline-none text-center      border shadow-md bg-transparent shadow-[#27374D] h-12 rounded-xl ' onChange={(e)=>setName(e.target.value)} />
           <input placeholder='Current Password' className='w-[85%] outline-none mt-3 text-center  border shadow-md bg-transparent shadow-[#27374D] h-12 rounded-xl ' type="password" onChange={(e)=>setPassword(e.target.value)} />
           <input placeholder='New Password' className='w-[85%] mt-3 outline-none text-center  border shadow-md bg-transparent shadow-[#27374D] h-12 rounded-xl ' type="password" onChange={(e)=>setNewPassword(e.target.value)} />
           <button className='w-[85%] text-center outline-none mt-3 border shadow-md shadow-[#27374D] text-[#27374D] font-bold hover:bg-[#27374D] hover:text-white h-12 rounded-xl 'type="submit">Change</button>
          
        </form>
    </div>
  )
}

export default ChangePassword