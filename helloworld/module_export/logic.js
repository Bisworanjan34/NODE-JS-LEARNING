// function show(a,b){
//     return a+b
// }

// module.exports={
//     showfun:show,

// }

// exports.showfun=(a,b)=>  a+b+" 10"

let addfun=(a,b)=>{
    return a+b
}
let minfun=(a,b)=>{
    return a-b
}

module.exports={
    min:minfun,
    add:addfun
}

// exports.add=(a,b)=>{a+b}