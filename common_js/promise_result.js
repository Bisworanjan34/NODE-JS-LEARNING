let promise=require('./promise_module')

let {fun1,fun2,fun3}=promise

let promisefun=async()=>{
    let data1=await fun1()
    let data2=await fun2(data1)
    fun3(data2)
}
promisefun()