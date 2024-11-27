let fs=require('fs')
let http=require('http')

let server=http.createServer((req,res)=>{
    fs.readFile('./user.json','utf-8',(err,data)=>{
        err?res.end('somthing is missing')
        :res.end(data),console.log(data)
    })
})
server.listen(4044,()=>console.log('server started in http://localhost:4044'))

