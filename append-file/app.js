let http=require('http')
let fs=require('fs')
let port =1313

let server=http.createServer((req,res)=>{
    fs.appendFile('./createfile.html','\n<p>second pragraph</p>',(err)=>{
        err?res.end('errrrr'):res.end('file crated'),console.log('file created')
    })
})

server.listen(port,()=>console.log('server started'))