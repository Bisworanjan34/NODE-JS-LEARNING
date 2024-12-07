import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Signup from '../components/Signup'
import { LoginContext } from '../components/contextapis/loginContext'
import Login from '../components/Login'
import Userinfo from '../components/Userinfo'
import Forgotpassword from '../components/Forgotpassword'
import PageNotFound from '../pages/PageNotFound'
const AllRoutes = () => {
    let {login}=useContext(LoginContext)
  return (
    <div>
       <Navbar/>
       <Routes>
         <Route path='*' element={<PageNotFound/>}/>
         <Route path='/' element={login?<Home/>:<Login/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/signup' element={<Signup/>}/>
         <Route path='/usersinfo' element={<Userinfo/>}/>
         <Route path='/forgotpassword' element={<Forgotpassword/>}/>
       </Routes>
    </div>
  )
}

export default AllRoutes
