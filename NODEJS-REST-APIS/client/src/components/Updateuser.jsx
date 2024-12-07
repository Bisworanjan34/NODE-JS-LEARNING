import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Updateuser = () => {
    let {id}=useParams()
  let [input,setinput]=useState({_id:'',name:'',price:'',color:''})
  let handleChange=(e)=>{
    let{name,value}=e.target
    setinput({...input,[name]:value})
  }
useEffect(()=>{
  axios.get(`http://localhost:2025/updateuser/${id}`)
  .then((res)=>{console.log(res.data),setinput(res.data)})
},[])
  let handleSubmit=(e)=>{
    e.preventDefault()
      axios.put('http://localhost:2025/updateone',input)
      .then((res)=>{
        console.log(res.data)
        // setinput({_id:'',name:'',price:'',color:''})
      })
      .catch((err)=>console.log(err))
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
        Product-Update
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Username */}
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-600">
            name
          </label>
          <input
            type="text"
            name="name"
            id="username"
            value={input.name}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter your username"
            required
          />
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            price
          </label>
          <input
            type="text"
            name="price"
            id=""
            value={input.price}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter your password"
            required
          />
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
            color
          </label>
          <input
            type="text"
            name="color"
            id=""
            value={input.color}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter your phone number"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200"
        >
          upadate
        </button>
      </form>
    </div>
  </div>
  )
}

export default Updateuser
