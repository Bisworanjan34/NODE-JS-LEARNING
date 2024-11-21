// let http=require('http')
// let fs=require('fs')
// let port =3030;

// let createFolder=(res)=>{
//     fs.mkdir('./html',(err)=>{
//         if(err){
//            res.end('<h2 style="color:red">folder is not created</h2>')
//         }
//         else{
//             res.end('<h2 style="color:green">folder is created</h2>')
//         }
//     })
// }
// let removeFolder=(res)=>{
//     fs.rmdir('./html',(err)=>{
//         if(err){
//            res.end('<h2 style="color:red">folder is not removed</h2>')
//         }
//         else{
//            res.end('<h2 style="color:green">folder is removed</h2>')
//         }
//     })
// }
   
// let server=http.createServer((req,res)=>{
//    res.setHeader('Access-Control-Allow-Origin','*')
//     if(req.url === '/create'){
//        createFolder(res)
//     }
//     else {
//       removeFolder(res)
//     }
   

// })

// server.listen(port,()=>console.log('server started in http://localhost:3030'))

const http = require('http');
const fs = require('fs');
const port = 3030;

const createFolder = (res) => {
    fs.mkdir('./html', { recursive: true }, (err) => {
        if (err) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<h2 style="color:red">Folder is not created</h2>');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<h2 style="color:green">Folder is created</h2>');
        }
    });
};

const removeFolder = (res) => {
    fs.rmdir('./html', { recursive: true }, (err) => {
        if (err) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<h2 style="color:red">Folder is not removed</h2>');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<h2 style="color:green">Folder is removed</h2>');
        }
    });
};

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'no-store'); // Prevent caching

    if (req.url === '/create') {
        createFolder(res);
    } else if (req.url === '/delete') {
        removeFolder(res);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h2 style="color:orange">Invalid endpoint</h2>');
    }
});

server.listen(port, () => console.log(`Server started at http://localhost:${port}`));
