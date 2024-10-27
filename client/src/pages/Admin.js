import React, { useState } from 'react'
import AddMenu from './AddMenu'
import Dashboard from './Dashboard'
import ChangePassword from './ChangePassword';
import { FaSortAlphaDown } from "react-icons/fa";
import { FaSortAlphaDownAlt } from "react-icons/fa";
import AOS from "aos"
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
import { RiAddCircleFill } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
import { RiExchangeLine } from "react-icons/ri";
import { GrOverview } from "react-icons/gr";

const Admin = ({menu,setMenu}) => {
    const cookies = new Cookies();
    const navigate = useNavigate(); 
const [dropdown , setDropdown] = useState(false);

useEffect(()=>{
    AOS.init();

},[dropdown])
const[show,setShow] = useState("overview");   
const [search, setSearch] = useState("");
const [sortby, setSortby] = useState(false);

const options =["Appetizers",
"Entrees",
"Sides",
"Desserts",
"Beverages"]

const handleMenuShow =()=>{
   setShow("addmenu")
   setDropdown(false)
}
const handleOverviewShow =()=>{
    setShow("overview")
    setDropdown(false)
    
}
const handleChange =()=>{
    setShow("changepassword")
    setDropdown(false)
}
const handleLogout =()=>{
    cookies.remove("admin");
    setDropdown(false)
    navigate("/")
}
 return (
    <div className='h-[90vh] relative  bg-[#DDE6ED] dark:bg-[#27374D]  text-white overflow-hidden'>
         <div>
            <div data-aos="fade-right" data-aos-duration="600" className={`${!dropdown ? "hidden" : "flex flex-col fixed bg-[#526D82] top-20 z-10 h-72 w-52  text-lg rounded-tr-3xl rounded-br-3xl rounded-bl-3xl space-y-2"}`}>
            <button className='flex flex-row-reverse pr-3 pt-1 text-3xl' onClick={()=>setDropdown(!dropdown)}>x</button>

                    <button 
                    className='hover:scale-110 pt-7'
                    onClick={handleMenuShow}>
                    AddMenu
                    </button>

                    <button 
                    className='hover:scale-110'
                    onClick={handleOverviewShow}>
                    Overview
                    </button>
            
                    <button 
                    className='hover:scale-110'
                      onClick={handleChange}>
                      change password
                    </button>

                    <button 
                    className='hover:scale-110'
                      onClick={handleLogout}>
                      Logout
                    </button>
        </div>
       <div className=' h-12 flex dark:text-white text-[#27374D] items-center'>
            <button className='text-3xl hover:scale-110  text-[#27374D] dark:text-white z-10 ml-2' onClick={()=>setDropdown(!dropdown)}><GiHamburgerMenu /></button>
            {show === "overview" && <> <input placeholder='Search here...' className='h-8 pl-2 lg:ml-20 border-2 text-black w-[65%]  border-black rounded-lg ml-3' onChange={(e)=>setSearch(e.target.value)} />
            <select className='w-5 hover:scale-110   text-xl ml-2 rounded-md text-black' value={search} onChange={(ev)=>setSearch(ev.target.value)}>
            <option value="none" selected disabled >Select an Option</option> 
            <option value={""}>all</option>
       {options.map((option) => (

  <option value={option}>{option}</option>

))}

          </select>

          <button className='z-10 ml-2 text-2xl hover:scale-110  ' onClick={()=>setSortby(!sortby)}>{sortby ? <FaSortAlphaDown /> : <FaSortAlphaDownAlt />}</button></>}
          <div className='hidden md:flex absolute right-0 space-x-2 lg:space-x-4' >
          <button 
                    className='hover:scale-110    top-2 text-3xl'
                    onClick={handleMenuShow}>
                    <RiAddCircleFill />
                    </button>

                    <button 
  className='hover:scale-110  top-2  text-3xl'                    onClick={handleOverviewShow}>
                    <GrOverview />
                    </button>

                    <button 
  className='hover:scale-110   top-2 text-3xl'                      onClick={handleChange}>
                       <RiExchangeLine />
                    </button>

                    <button 
  className='hover:scale-110   top-2 text-3xl'                      onClick={handleLogout}>
                      <MdLogout />
                    </button>
                    </div>          
        </div>
        <div   className='overflow-x-scroll '>            
            { show === "addmenu" && <AddMenu /> }
           { show === "overview" && <Dashboard menu={menu} setMenu={setMenu} search = {search} sortby={sortby}/> }
        </div></div>
        {show ==="changepassword" && <ChangePassword />} 
        </div>
  )
}

export default Admin