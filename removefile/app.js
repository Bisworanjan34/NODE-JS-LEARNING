let http=require('http')
let fs=require('fs')
let port =1315

let server=http.createServer((req,res)=>{
    fs.unlink('./removefile.html',(err)=>{
        err?res.end('errrrr'):res.end('file deleted')
        console.log('file deleted')
    })
})

server.listen(port,()=>console.log('server started ....................'))