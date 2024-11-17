// const  http=require("http")
// const fs=require("fs")
// const myServer=http.createServer((req,res)=>{
//     const log=`${Date.now()}${req.url}:new request recived\n`
//     fs.appendFile('./log.txt',log,(err,data)=>{

     

//         switch(req.url){
//             case '/':res.end('home page')
//             break;
//             case '/about':res.end('this is about page')
//             break;
//             case '/about/contact':res.end('this is contact in about page')
//             default:res.end("page not found | 404 |")
//         }

//         // console.log("new request resive",req.headers)
//         // res.end("hello bisworanjan sahoo you are webdeveloper")
//     })
// });

// myServer.listen(8003,()=>{console.log("server started")})

let http=require('http')
let express=require('express')
let app=express()

app.get('/',(req,res)=>{
    res.send('this is home page')
})
app.get('/dev',(req,res)=>[
    res.send('this is dev page')
])

let myServer=http.createServer(app)

myServer.listen(4444,()=>{console.log('server started')})