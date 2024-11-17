// function add(a,b){
//     return a+b
// }
// function min(a,b){
//     return a-b
// }
// module.exports={add,min}
// 2 way to export module 
// exports.add=(a,b)=>a+b
// exports.min=(a,b)=>a-b
// exports.mul=(a,b)=>a*b

function add(s,d){
    return s+d
}
function min(s,d){
    return s-d
}

module.exports={
    addfun:add,
    minfun:min
}
