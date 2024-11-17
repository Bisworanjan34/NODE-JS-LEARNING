

async function printNumbers() {
    for (let i = 1; i <= 5; i++) {
      await new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(i)
            resolve()
        },1000)
      });
    }
  }
  
  
  let print_table=async(num)=>{
    console.log('table of ',num)
    for (let i=1; i<=10;i++){
        await new Promise(resolve=>setTimeout(resolve,2000))
        let res=num*i
        console.log('table =_=__',num,"*",i, "=_=",res) 
    }
  }

  

  let print_Time=async()=>{
    for (let i=1;i<10;i++){
        await new Promise(resolve=>setTimeout(resolve,3000));
        let time=Date()
        let res=time+i
        console.log("time",res)
    }
}
printNumbers().then(print_table(3).then(print_Time()))