let http=require('http')
let fs=require('fs')

let server=http.createServer((req,res)=>{
  if(req.url == '/'){
    fs.readFile('../client/home.html','utf-8',(err,data)=>{
        err?res.end('somthing is error')
        :res.end(data),console.log(data)
      })
  }
  else if(req.url == '/about'){
    fs.readFile('../client/about.html','utf-8',(err,data)=>{
        err?res.end('somthing is error')
        :res.end(data)
      })
  }
  else if(req.url == '/service'){
    fs.readFile('../client/service.html','utf-8',(err,data)=>{
        err?res.end('somthing is error')
        :res.end(data)
      })
  }
  else if(req.url == '/service/new'){
    fs.readFile('../client/servicenew.html','utf-8',(err,data)=>{
        err?res.end('somthing is error')
        :res.end(data)
      })
  }
 else{
 fs.readFile('../client/pagenotfound.html','utf-8',(err,data)=>{
  err?
  res.end('somthing error')
  :res.end(data)
 })
 }
})

server.listen(5454,()=>console.log('server started'))