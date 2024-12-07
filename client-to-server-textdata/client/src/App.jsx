import { useState } from 'react'
// import axios from 'axios'
import './App.css'

function App() {
  const [gdata, setgdata] = useState([])
  let [text,settext]=useState('')

  let getfun=async()=>{
    let res=await fetch('http://localhost:2027')
    let data=await res.json()
    setgdata(data)
    console.log(data)
   
  }
  let gettext=async()=>{
    let res=await fetch('http://localhost:2027/node')
    let text=await res.text()
    settext(text)
    console.log(text)
   
  }
  let mydata={
    id:10,
    name:'hellodear',
    color:'white',
    age:23
  }
  let postfun=async()=>{
    let res=await fetch('http://localhost:2027',{
      method:'POST',
      body:JSON.stringify(mydata),
      headers:{'Content-type':'application/json'}
    })
    let data=await res.json()
    setgdata(data)
    console.log(data)
   
   
  }
  return (
   <>
     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis officiis odio qui vero consequuntur, ullam perferendis ab aut, vitae sapiente, corrupti tenetur id! Aut dolore pariatur sapiente explicabo nesciunt aliquid!</p>
     <button onClick={getfun}>get data</button>
     <button onClick={gettext}>teeeext</button>
     <button onClick={postfun}>post-fun</button>

     {
      gdata.length > 0 && gdata.map((d,i)=>{
        return (
          <div className="div" key={i} style={{display:'flex',gap:'20px'}}>
            <h3>{d.id}</h3>
            <h3>{d.name}</h3>
            <h3>{d.color}</h3>
            <h3>{d.age}</h3>
          </div>
        )
      })
     }

        <div className="div">
          <p>{text}</p>
        </div>
   </>
  )
}

export default App
