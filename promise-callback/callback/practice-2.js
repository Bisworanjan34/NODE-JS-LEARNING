let fun1= async(num1,f2)=>{
    console.log("data fetching............")
  await new Promise((res)=>{
    setTimeout(()=>{
        console.log('hello dear am function1')
        res()
        f2(num1,fun3)

    },1000)
  })

}
let fun2=async(num2,f3)=>{
  await new Promise((res)=>{
    setTimeout(()=>{
        console.log('hello dear am function2')
        let add=num2+100
        f3(add)
        console.log(add)
        res()
    },1000)
  })
}
let fun3=async(result)=>{
    await new Promise((res)=>{
        setTimeout(()=>{
            console.log('hello dear am function3')
            let ans=result*1000
           console.log(ans)
            res()
        },1000)
    })
}
fun1(10,fun2)