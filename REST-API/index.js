let express=require('express')
const users=require('./MOCK_DATA.json')
let app=express()
let port=3000

//route
// app.get('/users',(req,res)=>{
//     const html=`
//     <ul>
//      ${users.map((u)=>`<li>${u.first_name}</li>`).join("")}
//     </ul>
//     `
//     res.send(html)
// })
app.get('/api/users',(req,res)=>{
    return res.json(users)
})

app.get('/api/users/:id',(req,res)=>{
    let id=Number(req.params.id)
    let user=users.find((f)=>f.id === id)
    return res.json(user)
})
app.post('/api/users',(req,res)=>{
    return res.json({status:"pending"})
})

   
app.listen(port,()=>{console.log("server started",port)})

