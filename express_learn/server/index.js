const express=require('express')
const http=require('http')
const app=express()
let port=3333
  app.get("/",(req,res)=>{
    return res.send('hello this is home page')
  })
  app.get("/about",(req,res)=>{
    return res.send('hello this is about page')
  })
  app.get("/about/info",(req,res)=>{
    return res.send('hello this info inside of about page ')
  })
const myServer=http.createServer(app)

myServer.listen(port,()=>console.log('server started'))

