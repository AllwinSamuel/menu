import axios from 'axios'
import React, { useState } from 'react'

const AddMenu = () => {
 
  const [ name,setName] = useState("")
  const [ category,setCategory] = useState("")
  const [ price,setPrice] = useState("")
  const options =["Appetizers",
  "Entrees",
  "Sides",
  "Desserts",
  "Beverages"]
  const addItem=(e)=>{
    e.preventDefault();
      if(category !== ""){
      axios.post("http://localhost:5000/addItem" ,{name,category,price}).then((res)=>{
       setName("")
       setPrice("")
    })}
    
  }

  const onKey =(e)=> {
    if (e.keyCode === "enter") {
      addItem();
    }
  };
  return (
    <div  className='h-screen w-screen bg-[#DDE6ED] dark:bg-[#27374D] flex flex-col items-center pt-20  '>
        <form onSubmit={addItem} onKeyDown={onKey}  className='w-80  relative text-[#27374D] dark:text-white h-72 flex shadow-sm  flex-col items-center rounded-3xl '>
              <p className='text-center w-full border-r-2 dark:border-white  border-[#27374D] border-l-2  border-t-2 font-bold text-2xl h-14 rounded-tr-3xl rounded-tl-3xl pt-3'>ADD TO MENU</p>
                <input  className='h-8 w-[85%] placeholder-inherit  bg-transparent text-[#27374D] dark:text-white outline-none mt-4 dark:border-white  border-[#27374D]  border-b-2 text-center text-xl' type="text " placeholder='FoodName' required value={name} onChange={(ev)=>setName(ev.target.value)} />
               
       <select  
          className='w-[85%] text-center dark:border-white  border-[#27374D]  text-xl h-8 mt-3 border-b-2 outline-none bg-transparent'
          required 
          value={category} 
          onChange={(ev)=>setCategory(ev.target.value)}>
                                                      <option  className='text-black appearance-none ' value={""}>Select Category</option>

                                                       {options.map((option)=>(
                                                  <option className='text-black appearance-none ' value={option}>{option}</option>

                                                ))}

                </select>
              <input  type="number" className='h-8 dark:border-white  border-[#27374D]  w-[85%] bg-transparent placeholder-inherit text-[#27374D] dark:text-white outline-none mt-3 border-b-2  text-center  text-xl' placeholder='price' required value={price} onChange={(ev)=>setPrice(ev.target.value)} />
              <button 
                className='bg-black/10 dark:bg-white/20 mt-3 cursor-pointer  rounded-xl h-10 mb-4 dark:hover:bg-[#DDE6ED] hover:text-white hover:bg-[#27374D] dark:hover:text-black w-[85%]' 
                type="submit" >
                  Add</button>
              <p className='w-full  border-b-2 absolute bottom-0 border-r-2 border-l-2 border-[#27374D] dark:border-white h-8 rounded-br-3xl rounded-bl-3xl'></p>
        </form>
    </div>
  )
}

export default AddMenu