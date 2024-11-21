let http=require('http')
let port =4040
let server=http.createServer((req,res)=>{
     
     res.end("<h4 > response success </h4>")
   
})

server.listen(port,()=>console.log('server started in http://localhost:4040'))