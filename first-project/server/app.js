// let fs=require('fs')
// let http=require('http')
// http.createServer((req,res)=>{
//     fs.mkdir('./html',(err)=>{
//         if(err){
//             console.log('there is an err in this time...')
//         }
//         else{
//             console.log('file is created successfully')
//         }
//     })
// })


const fs = require('fs');
const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    const query = url.parse(req.url, true).query;
    const action = query.action;

    if (action === 'create') {
        // Create the folder
        fs.mkdir('./html', { recursive: true }, (err) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error creating folder');
                console.error(err);
            } else {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('Folder created successfully');
            }
        });
    } else if (action === 'remove') {
        // Remove the folder
        fs.rmdir('./html', { recursive: true }, (err) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error removing folder');
                console.error(err);
            } else {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('Folder removed successfully');
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Invalid action');
    }
}).listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
