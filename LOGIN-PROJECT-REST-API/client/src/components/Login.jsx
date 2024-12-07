import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { LoginContext } from './contextapis/loginContext'

const Login = () => {
  let {setLogin}=useContext(LoginContext)
    let [input,setinput]=useState({name:'',password:''})
    let [users,setUsers]=useState([])
    let [err,seterr]=useState('')
    let handlechange=(e)=>{
        let {name,value}=e.target
        setinput({...input,[name]:value})
    }

    const loginfun = (e) => {
      e.preventDefault();
      axios
          .post('http://localhost:2025/login', input)
          .then((res) => {
              if (res.data.success) {
                  console.log(res.data.message);
                 setLogin(true)

              } else {
                  console.log(res.data.message);
                  seterr(res.data.message)
              }
          })
          .catch((err) => console.error('Error during login:', err));
      
  };
  return (
    <div>
       <div className="div signup bg-white h-[300px] w-[400px] m-auto rounded-md mt-[4rem]">
              <div className="div text-center size-[93%] m-auto">
                  <h1 className='text-xl font-bold text-blue-600 translate-y-5'>Login</h1>
                  <form action="" className=' mt-10' onSubmit={loginfun}>
                    <input type="text" placeholder='enter username' name='name' onChange={handlechange} required value={input.name}/>
                    <input type="text" placeholder='enter password' name='password' onChange={handlechange} required value={input.password}/>
                    <button 
                   type='submit'               

                    className='bg-blue-600 active:scale-95 transition-all'>Log in</button>
                  </form>
                    <div className="div">
                      <div className="div text-start flex justify-between">
                      <Link to={'/signup'} className='text-blue-600 m-4 inline-block '>signup</Link>
                      <Link to={'/forgotpassword'} className='text-blue-600 m-4 inline-block '>forgot password</Link>
                      </div>
                      <p className='text-red-600 text-[13px]'>{err}</p>
                    </div>
              </div>
                
           </div>
          
    </div>
  )
}

export default Login
