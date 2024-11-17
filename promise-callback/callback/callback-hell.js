
async function f1() {
  
    console.log("f1 function");
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("f2 function");
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("f3 function");
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("f4 function");
    console.log('dear user your task don..')
}

f1();