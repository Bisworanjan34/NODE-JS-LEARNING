import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { LoginContext } from './contextapis/loginContext'


const Navbar = () => {
  let {setLogin}=useContext(LoginContext)
  return (
    <div>
     
     <nav className='justify-center h-[40px] w-full bg-white items-center '>
         <div className="div flex gap-4 justify-center items-center h-full">
         <NavLink to={'/'}
          className={({isActive})=>isActive?'text-blue-800 font-semibold':'text-black'}>
            Home</NavLink>
          <NavLink to={'/contact'}
          className={({isActive})=>isActive?'text-blue-800 font-semibold':'text-black'}>
            Contact</NavLink>
          <NavLink to={'/usersinfo'}
          className={({isActive})=>isActive?'text-blue-800 font-semibold':'text-black'}>
            usersinfo</NavLink>
          <NavLink to={'/'}
          className='text-black'
          onClick={()=>setLogin(false)}
          >
            Logout</NavLink>

         </div>


     </nav>
          
    </div>
  )
}

export default Navbar
