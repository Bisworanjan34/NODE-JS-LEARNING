let http=require('http')
let fs=require('fs')

let server=http.createServer((req,res)=>{
    fs.writeFile('./cpluse.c++','',(err)=>{
        err
        ?res.end('somthing err')
        :res.end('successfully create file')

    })
})

server.listen(3033,()=>console.log('server started in http://localhost:3033'))