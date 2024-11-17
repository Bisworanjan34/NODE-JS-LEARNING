let data1=async()=>{
    await new Promise((resolve)=>{
        console.log('data fetching from server........')
        setTimeout(()=>{
            console.log('data 1 fetching')
            resolve()
        },1000)
       
    })
}
let data2=async()=>{
    await new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('data 2 fetching')
            resolve()
        },1000)
    })
}
let data3=async()=>{
    await new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('data 3 fetching')
            resolve()
        },1000)
    })
}
let data4=async()=>{
    await new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('data 4 fetching')
            resolve()
        },1000)
    })
}
let data5=async()=>{
    await new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('data 5 fetching')
            resolve()
        },1000)
    })
    console.log('Process end....')
}
data1()
.then(data2)
.then(data3)
.then(data4)
.then(data5)