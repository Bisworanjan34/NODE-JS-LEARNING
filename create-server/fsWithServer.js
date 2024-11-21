// let http=require('http')
// let fs=require('fs')

// let server=http.createServer((req,res)=>{
//         fs.mkdir('./css',(err)=>{
//             if(err){
//                 res.end('hello file is not created their is some issues ')
//             }
//             else{
//                 res.end('hello file is succesfully create')
//             }
//         }),
//         fs.rmdir('./css',(err)=>{
//             if(err){
//                 res.end('not remove folder')
//             }
//             else{
//                 res.end('remove folder succesfully')
//             }
//         })

// })

// server.listen(3333,()=>{
//     console.log('server started')
// })


// let http = require('http');
// let fs = require('fs');

// let server = http.createServer((req, res) => {
//     if (req.url === '/create-folder') {
//         fs.mkdir('./css', { recursive: true }, (err) => {
//             if (err) {
//                 res.end('Failed to create folder');
//             } else {
//                 res.end('Folder created successfully');
//             }
//         });
//     } else if (req.url === '/delete-folder') {
//         fs.rmdir('./css', { recursive: true }, (err) => {
//             if (err) {
//                 res.end('Failed to delete folder');
//             } else {
//                 res.end('Folder deleted successfully');
//             }
//         });
//     } else {
//         res.end('Invalid request');
//     }
// });

// server.listen(3333, () => {
//     console.log('Server started on http://localhost:3333');
// });

let http = require('http');
let fs = require('fs');

let server = http.createServer((req, res) => {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'text/plain');
    
    if (req.url === '/create-folder') {
        fs.mkdir('./css', { recursive: true }, (err) => {
            if (err) {
                res.statusCode = 500;
                res.end('Failed to create folder');
            } else {
                res.statusCode = 200;
                res.end('Folder created successfully');
            }
        });
    } else if (req.url === '/delete-folder') {
        fs.rmdir('./css', { recursive: true }, (err) => {
            if (err) {
                res.statusCode = 500;
                res.end('Failed to delete folder');
            } else {
                res.statusCode = 200;
                res.end('Folder deleted successfully');
            }
        });
    } else {
        res.statusCode = 404;
        res.end('Invalid request');
    }
});

server.listen(3333, () => {
    console.log('Server started on http://localhost:3333');
});
