import './App.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faHtml5, faJava } from "@fortawesome/free-brands-svg-icons";
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/Login';
import Products from './components/products';
import Updateuser from './components/Updateuser';
import { Logincontext } from './components/LoginContext';
import { useContext } from 'react';
import UsersInfo from './components/pages/UsersInfo';
function App() {
  let {login}=useContext(Logincontext)
  return (
   <>
        <h1 className='font-bold text-2xl text-blue-600 uppercase'>hello dear react-developer</h1>
        <FontAwesomeIcon size='2xl' icon={faReact} style={{ margin: "0 10px", color: "#4267B2" }} />
        <FontAwesomeIcon size='2xl' icon={faHtml5} style={{ margin: "0 10px", color: "#1DA1F2" }} />
        <FontAwesomeIcon size='2xl' icon={faJava} style={{ margin: "0 10px", color: "#C13584" }} />
        <Navbar/>
        <Routes>
      
           <Route path='/' element={login?<Home/>:<Login/>}/>
           <Route path='/usersinfo' element={<UsersInfo/>}/>
           <Route path='/products' element={<Products/>}/>
           <Route path='/updateuser/:id' element={<Updateuser/>}/>
      
        </Routes>
   </>
  )
}

export default App
