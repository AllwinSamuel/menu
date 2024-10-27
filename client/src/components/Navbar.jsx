import React from 'react'
import { useNavigate } from 'react-router-dom';
import { MdLightMode } from "react-icons/md";

const Navbar = ({setTheme,theme,start,setStart}) => {

  const navigate = useNavigate()

  const handleThemes =()=>{
    setTheme(theme === "dark" ? "light" : "dark")
   }
  return (
    <div className='bg-[#27374D] dark:border-b'>
        <button 
          className=' z-20 absolute h-10 w-10'
           onClick={()=>navigate("/admin")}></button>
        <div className='h-[8vh] text-white  font-bold font-serif  flex text-2xl items-center justify-center '>FOOD SPOT</div>
        <button className='absolute top-2 right-20' onClick={()=>setStart(!start)}>tour</button>
        <button className='absolute z-20 text-white top-2 text-3xl right-3' onClick={handleThemes}><MdLightMode /></button>
    </div>
  )
}

export default Navbar