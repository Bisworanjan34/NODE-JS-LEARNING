// promise base callback with async await synchonous

let waterfun=()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('water')
            resolve("water")
        },1000)
    })
}
let teaseads_fun=(water)=>{
    let step2=(water+" tea_seads")
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(step2)
            resolve(step2)
        },1000)
    })
}

let sweet_fun=(tea_seads)=>{
  let step3=(tea_seads+"   sweets")
  return new Promise((resolve)=>{
    setTimeout(()=>{
        console.log(step3)
        resolve(step3)
    },1000)
  })
}
let teafinal_fun=(final_step)=>{
    setTimeout(() => {
        let reslt=final_step+"  ginger"
        console.log(reslt)
        console.log('your tea is ready to have drink it....')
    }, 1000);
}

//calling 

let tea_make=async()=>{
    let step1=await waterfun()
    let step2=await teaseads_fun(step1)
    let step3=await sweet_fun(step2)
    teafinal_fun(step3)

}
tea_make()