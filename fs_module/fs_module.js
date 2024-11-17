let fs=require('fs')
//add file in this directory
fs.mkdir('firstfile',(err)=>err)
// remove file in this directory
fs.rmdir('firstfile',(err)=>err)