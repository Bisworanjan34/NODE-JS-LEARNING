import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Signup = () => {
    let navigate=useNavigate()
   let [input,setinput]=useState({name:'',mobileNo:'',password:''})
    let handlechange=(e)=>{
        let {name,value}=e.target
        setinput({...input,[name]:value})
    }
    let signupfun=(e)=>{
        e.preventDefault()
        console.log(input)
        
        if(input=={}){
            console.log("type here")
        }
        else{

            axios.post('http://localhost:2025/signup',input)
            .then((res)=>{
            console.log(res.data)
            if(!res.ok){
                setinput({name:'',mobileNo:'',password:''})
                navigate('/')
                
            }
            
        })
        .catch((err)=>err)
    }

    }

    
  return (
    <div>
           <div className="div signup bg-white h-[300px] w-[400px] m-auto rounded-md mt-[4rem]">
              <div className="div text-center size-[93%] m-auto">
                  <h1 className='text-xl font-bold text-green-600 translate-y-5'>Signup</h1>
                  <form action="" className=' mt-10' onSubmit={signupfun}>
                    <input type="text" placeholder='enter username' name='name' onChange={handlechange} required value={input.name}/>
                    <input type="number" placeholder='enter mobileno' name='mobileNo' onChange={handlechange} required value={input.mobileNo}/>
                    <input type="text" placeholder='enter password' name='password' onChange={handlechange} required value={input.password}/>
                    <button type='submit'>Sign up</button>
                  </form>
                    <div className="div">
                      <div className="div text-start">
                      <Link to={'/'} className='text-green-600 m-4 inline-block '>login</Link>
                      </div>
                    </div>
              </div>
                
           </div>
    </div>
  )
}

export default Signup
