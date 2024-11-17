let asyncf=async()=>{
    await new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('first data fetching .....')
            resolve()
        },1000)
,
        setTimeout(() => {
            console.log('f2 called ................')
            resolve()
        }, 2000)
    }
   

)
}

asyncf()