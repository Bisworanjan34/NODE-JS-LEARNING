import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className='h-[40px] items-center bg-slate-500 flex gap-4'>
            <NavLink to={'/'} className={({isActive})=>isActive?'text-green-300':'text-white'}>Home</NavLink>
            <NavLink to={'/products'} className={({isActive})=>isActive?'text-green-300':'text-white'}>Products</NavLink>
            <NavLink to={'/usersinfo'} className={({isActive})=>isActive?'text-green-300':'text-white'}>Usersinfo</NavLink>
        </nav>
    </div>
  )
}

export default Navbar
