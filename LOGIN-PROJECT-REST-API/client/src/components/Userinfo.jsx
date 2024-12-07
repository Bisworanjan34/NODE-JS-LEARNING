import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Userinfo = () => {
    let [data,setdata]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:2025/signup')
        .then((res)=>{console.log(res.data),setdata(res.data)})
    },[])
  return (
    <div>
         <h1 className='font-bold text-xl'>user info component</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas provident rem nulla tenetur?</p>
         <hr />
         <div className="div">
            {
                data.length>0 && data.map((item,i)=>{
                    return(
                        <div className="div flex gap-4" key={i}>
                            <p>{item.name}</p>
                            <p>{item.mobileNo}</p>
                            <p>{item.password}</p>
                        </div>
                    )
                })
            }
         </div>
    </div>
  )
}

export default Userinfo
