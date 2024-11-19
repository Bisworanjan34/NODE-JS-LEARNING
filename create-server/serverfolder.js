// let createFolder=()=>{
//    fetch('http://localhost:3333',{mode:'no-cors'})
//    .then((res)=>{return res.json()})
//    .then((data)=>alert('folder created',data))
//    .catch((err)=>alert('err to create folder',err))
// }
// let deleteFolder=()=>{
//     fetch('http://localhost:3333',{mode:'no-cors'})
//    .then((res)=>{return res.json()})
//    .then((data)=>alert('remove folder',data))
//    .catch((err)=>alert('err to remove folder',err))
// }

function createFolder() {
    fetch('http://localhost:3333/create-folder')
        .then(response => response.text())
        .then(alert)
        .catch(error => alert('Error: ' + error));
}

function deleteFolder() {
    fetch('http://localhost:3333/delete-folder')
        .then(response => response.text())
        .then(alert)
        .catch(error => alert('Error: ' + error));
}