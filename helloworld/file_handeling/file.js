const fs=require('fs') //fs(file-system)

// first argumen is your path,second argument is your code 
// fs.writeFileSync('./text.txt','hey user') //sync

// fs.writeFile('./text.txt','hello world',(err)=>{}) //async

// read file sync
// const res=fs.readFileSync('./contact.txt','utf-8')
// console.log(res)
//async
// fs.readFile('./contact.txt','utf-8',(err,r)=>{
//     if(err){
//         console.log('err',err)
//     }
//     else{
//         console.log(r)
//     }
// })

// append file 

// fs.appendFileSync('./text.txt',new Date().getDate().toLocaleString())
fs.appendFileSync('./text.txt','hello biswo developer+hackre\n') //adding file
