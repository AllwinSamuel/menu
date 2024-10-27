
import React,{useState} from 'react'
import Lottie from "lottie-react" 
import ani from "../assets/ani2 (2).json"
import ani3 from "../assets/ani2.json"
const Home = ({menu,theme}) => {
  const [category,setCategory] = useState("")
  const options = ["Appetizers",
                  "Entrees",
                  "Sides",
                  "Desserts",
                  "Beverages"]
  return (
    <div className='bg-[#DDE6ED] dark:bg-[#27374D] pt-1 relative h-[88vh]  overflow-hidden'>
      <div className=' flex space-x-3 py-2 mt-[-12px] md:ml-[50%] md:w-[47%] overflow-x-scroll'>
        <button className='bg-[#526D82] second outline-none px-8 ml-2 rounded-lg text-sm text-white font-bold shadow-md hover:bg-[#27374D] shadow-gray-900 dark:shadow-sm dark:shadow-white ' onClick={()=>setCategory("")}>All</button>
         {options.map((option) => (
                                  <button className='bg-[#526D82] hover:scale-105 hover:bg-[#27374D] shadow-md shadow-gray-900 dark:shadow-sm dark:shadow-white outline-none px-8 rounded-lg py-1.5 font-bold text-white mr-2'
                                    value={option} 
                                    onClick={()=>setCategory(option)}>
                                    {option}
                                  </button>
                                  ))}
      </div>

      <div className='md:flex  w-screen'>
      <div className='hidden  md:flex relative top-[-4rem]  justify-center items-center  text-white h-[92vh]   w-1/2'>
             <Lottie  className='text-white blur-[2px] h-[150vh] w-[800px]' animationData={theme === "dark" ? ani : ani3} />
             <p className={`absolute ${theme === "dark" ? "head" : "header"} font-serif text-8xl`}>FOOD SPOT</p>
          </div>
       <div className='md:w-1/2' >
          <input placeholder='search here...' id="input" className='w-[90%] dark:border dark:cc text-center outline-none placeholder:text-black  h-8 rounded-xl ml-3'
            onChange={(e)=>setCategory(e.target.value)}
            />
      <div className='h-[76vh] pb-20 overflow-y-scroll flex flex-col items-center w-[96%] mt-3'>
        
        {    
            menu
            ?.filter((item)=>item?.name.toLowerCase().includes(category.toLowerCase()) 
                            || item.category.toLowerCase().includes(category.toLowerCase()) 
                            || item.price.toLowerCase().includes(category.toLowerCase()))
            .map((item)=>( 
                item.show &&
                (<div className='flex third relative bg-[#27374D]  dark:bg-[#DDE6ED] font-semibold  box shadow-md shadow-black  text-white w-[89%] py-2 items-center rounded-xl justify-between mb-2 text-xl pl-6 ' key={item._id}>
                  <p className='w-3/4 dark:text-[#27374D] break-words '>{item.name}</p>
                  <p className='absolute dark:text-black  right-5'>&#8377;{item.price}.00</p>
                 </div>)
             ))}
      </div>
      </div>
          
      </div>
      
    </div>
  )
}

export default Home