import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const UsersInfo = () => {
    let [data,setdata]=useState([])
  let navigate=useNavigate()
    let productget=()=>{
      axios.get('http://localhost:2025/products')
      .then((res)=>{console.log(res.data),setdata(res.data)})
    }

    let updateone=(id)=>{
      navigate(`/updateuser/${id}`)
    }
    let deleteone=(id)=>{
      axios.delete(`http://localhost:2025/deleteone/${id}`)
      .then((res)=>{console.log(res.data)})
    }


  return (
    <div>
      <h1>user-info page</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, voluptatum repellat molestias, dolor, amet deleniti ut a laboriosam quasi quaerat aliquid iste eos.</p>
      <button className='h-[30px] w-[110px] bg-green-600 border-0 text-white rounded-md' onClick={productget}>product</button>
<h3 className='font-bold text-black text-xl'>products-informtion</h3>
       
            <div className='flex gap-10'>
              <h1 className='text-xl font-bold text-green-600'>name</h1>
              <h1 className='text-xl font-bold text-green-600'>price</h1>
              <h1 className='text-xl font-bold text-green-600'>color</h1>
            </div>
        <div className='mt-4'>
              {
                data.length>0 && data.map((p,i)=>{
                  return (
                    <div key={i} className='flex gap-10 m-4'>
                       
                          <p>{p.name}</p>
                          <p>{p.price}</p>
                          <p>{p.color}</p>
                          <button className='h-[30px] w-[110px] bg-blue-600 border-0 text-white rounded-sm' onClick={()=>updateone(p._id)}>update</button>
                          <button className='h-[30px] w-[110px] bg-orange-600 border-0 text-white rounded-sm' onClick={()=>deleteone(p._id)}>delete</button>
                       
                    </div>
                    
                  )
                })
              }
          </div>
        
    </div>
  )
}

export default UsersInfo
