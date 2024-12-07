import React, { useState } from 'react'

const Getdata = () => {
    let [data,setdata]=useState([])

    let getdata=async()=>{
        let res=await fetch('http://localhost:2025')
        let data=await res.json()
        setdata(data)
        console.log(data)
        }
  return (
    <div>
         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa numquam maiores magni repudiandae iste itaque odit est adipisci dolores, provident velit aliquam facilis recusandae consequatur, fugit unde, ipsam eos? Quasi labore ut quae!</p>
         <button onClick={getdata}>get-data</button>

         <div className="div">
            {
                data.length>0 &&data.map((data,i)=>{
                    return (
                        <div className="div" key={i} style={{display:'flex',gap:'33px'}}>
                            <p>{data.id}</p>
                            <p>{data.name}</p>
                            <p>{data.age}</p>
                            <p>{data.color}</p>
                        </div>
                    )
                })
            }
         </div>
    </div>
  )
}

export default Getdata
