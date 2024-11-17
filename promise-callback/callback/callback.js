let f1=(f2)=>{
    console.log("f1 function")
    f2()
}
let f2=()=>{
    console.log("f2 function")
    
}

f1(f2)
