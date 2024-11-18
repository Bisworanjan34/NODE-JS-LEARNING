
let fun1=()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(100)
            resolve(100)
        })
    })
}
let fun2=(fun1data)=>{
    let step2=fun1data+100
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log(step2)
            resolve(step2)
        }, 1000);
    })
}
let fun3=(fun2data)=>{
   let final=fun2data+133
   setTimeout(() => {
       
       console.log("your final result = ",final)
   }, 1000);
}

module.exports={fun1,fun2,fun3}