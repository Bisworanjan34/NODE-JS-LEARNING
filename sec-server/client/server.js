
let createFolder=()=>{
    fetch('http://localhost:3030/create')
    .then((res)=>{ return res.text()})
    .then((data)=>{
        
    let output=document.getElementById('output')
    output.innerHTML=data
   })
   .catch((err)=>{
   console.log(err,'somthing is error',err)
   })
}
let deleteFolder=()=>{
    fetch('http://localhost:3030/delete')
    .then((res)=>{return res.text()})
    .then((data)=>{
        let output=document.getElementById('output')
        output.innerHTML=data
       })
    .catch((err)=>console.log(err,'somthing is error'))
}