let http=require('http')
let fs=require('fs')

let server=http.createServer((req,res)=>{
    fs.readFile('./read.html','utf-8',(err,data)=>{
        err?res.end('somthing err')
        :res.end(data)
    })
})

server.listen(4545,()=>console.log('server started'))
