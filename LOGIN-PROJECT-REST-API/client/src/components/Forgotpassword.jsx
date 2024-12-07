import React, { useState } from 'react'

const Forgotpassword = () => {
  let [input,setinput]=useState({password:'',confpass:''})
    let handlechange=()=>{

    }
    let forgotfun=()=>{

    }
  return (
    <div>
      <h1>Forgot password</h1>
      <div>
       <div className="div signup bg-white h-[300px] w-[400px] m-auto rounded-md mt-[4rem]">
              <div className="div text-center size-[93%] m-auto">
                  <h1 className='text-xl font-bold text-blue-600 translate-y-5'>Forgot password</h1>
                  <form action="" className=' mt-10' onSubmit={forgotfun}>
                    <input type="text" placeholder='enter password' name='password' onChange={handlechange} required value={input.password}/>
                    <input type="text" placeholder='enter conform password' name='confpass' onChange={handlechange} required value={input.confpass}/>
                    <button 
                   type='submit'               

                    className='bg-blue-600 active:scale-95 transition-all'>change password</button>
                  </form>
                    {/* <div className="div">
                      <div className="div text-start">
                      <Link to={'/signup'} className='text-green-600 m-4 inline-block '>signup</Link>
                      <Link to={'/forgotpassword'} className='text-green-600 m-4 inline-block '>forgot password</Link>
                      </div>
                      <p className='text-red-600 text-[13px]'>{err}</p>
                    </div> */}
              </div>
                
           </div>
          
    </div>

    </div>
  )
}

export default Forgotpassword
