import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { useEffect, useState } from "react"
import axios from "axios"
import Admin from "./pages/Admin"
import Login from "./pages/Login"
import Cookies from "universal-cookie"



function App() {
  const cookies = new Cookies();
  const [user,setUser] = useState(cookies.get("admin"))
  const [menu,setMenu] = useState([]);
  const [start,setStart] = useState(false);
  const [steps] = useState(
    [{
      content:<p>hi there</p>,
      target:".first"
    },
    {
      content:<p>hi there</p>,
      target:".second"
    },
    {
      content:<p>hi there</p>,
      target:".third"
    }]
  );

  const [theme , setTheme] = useState("dark")
 

  useEffect(()=>{
    if(theme === "dark"){
      document.documentElement.classList.add("dark")
    }
    else{
      document.documentElement.classList.remove("dark")
    }
  },[theme])
  useEffect(()=>{
          
          axios.get("http://localhost:5000/menu").then((res)=>{
          setMenu(res.data)
            })
},[menu])
  return (
    <BrowserRouter>
      
      <div className='h-[100vh] overflow-y-scroll bg-[#DDE6ED] dark:bg-[#27374D]'>
        <Navbar setTheme={setTheme} setStart={setStart} start={start} theme={theme} />
        <div className="first">oeijdoijd</div>
      <Routes>
        <Route path="/" element={<Home menu={menu} theme={theme} setMenu={setMenu} />} />
        <Route path="/Adminpanel" element={user ? <Admin menu={menu} setMenu={setMenu} /> : <Home />} />
        <Route path="/Admin" element={<Login setUser={setUser} />} />
        <Route path="*" element={<p className="text-center mt-12">404 page not found!</p>} />
      </Routes>
 
    
   
      </div>
    </BrowserRouter>
  )
}

export default App
