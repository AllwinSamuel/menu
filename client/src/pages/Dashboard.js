import axios from 'axios'
import { MdDelete } from "react-icons/md";
import { IoArrowUndoCircleSharp } from "react-icons/io5";
import { CiCircleRemove } from "react-icons/ci";
import Swal from "sweetalert2"

const Dashboard = ({menu,search,sortby}) => {
  
const handleShow =(id)=>{
   
    axios.put(`http://localhost:5000/show` , {id}).then((res)=>{
        
    })
}
const handleDelete =(id)=>{
   
 
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      axios.post(`http://localhost:5000/delete` , {id}).then((res)=>{
        if(res.data ==="ok"){
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });}
        else{
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Something went wrong!",
            showConfirmButton: false,
            timer: 1000
          });
        }
    })
      
    }
  });
}

const categories = [
                    "SHOW" , 
                    "FOOD_NAME" , 
                    "CATEGORY" , 
                    "PRICE" ,
                    "DELETE"
                   ]
  return (
    <div className='overflow-x-scroll text-white h-[83vh] '>
      <table className='table table-hover bg-white table-bordered border-black/90'>
         <thead>
             <tr className='text-lg bg-[#27374D] dark:bg-[#526D82] border text-white'>
               {categories.map((category)=>(
                 <th>{category}</th>
               ))}
             </tr>
         </thead>
      <tbody className='border '>{
             menu?.filter((item)=>item?.name.toLowerCase().includes(search.toLowerCase()) 
             || item.category.toLowerCase().includes(search.toLowerCase()) 
             || item.price.toLowerCase().includes(search.toLowerCase()))
             .sort((a,b)=>sortby ? (a.name > b.name ? 1 : -1) : (a.name > b.name ? -1 : 1)).map((item)=>(
                  <tr className='text-lg hover:bg-stone-100 '>
                   <td 
                        className='flex items-center  justify-center text-4xl'
                        onClick={
                        ()=>handleShow(item._id)
                        }>{item.show  ? <span className='text-green-700 hover:text-green-500'><IoArrowUndoCircleSharp /></span> : <span className='text-red-700'><CiCircleRemove /></span> }
                   </td>

                   <td 
                    >{item.name}</td>
                   <td>{item.category}</td>
                   <td>{item.price}</td>
                   

                   <td 
                         className='flex items-center justify-center text-4xl  text-red-800'
                        onClick={
                        ()=>handleDelete(item._id)
                        }><span className='hover:scale-110 hover:text-red-600'><MdDelete/></span>
                 </td>
      </tr>
             ))
              
        }</tbody>
        </table>
    </div>
  )
}

export default Dashboard