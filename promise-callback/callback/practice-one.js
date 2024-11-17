const f1fun=()=>{
    console.log('f1 called')
    // f2callback(f3fun)
}
const f2fun=(f1callback)=>{
    console.log('f2 called')
    f1callback()
}
const f3fun=(f2callback)=>{
    console.log('f3 called')
    f2callback(f1fun)
}
const f4fun=(f3callback)=>{
    console.log('f4 called')
    f3callback(f2fun)
}
const f5fun=(f4callback)=>{
    console.log('f5 called')
    f4callback(f3fun)
}

f5fun(f4fun)
// -----------------------------------------
console.log('----------------------------')

const a1fun=(a2callback)=>{
    console.log('a1 called')
    a2callback(a3fun)
}
const a2fun=(a3callback)=>{
    console.log('f2 called')
    a3callback(a4fun)
}
const a3fun=(a4callback)=>{
    console.log('a3 called')
    a4callback(a5fun)
}
const a4fun=(a5callback)=>{
    console.log('f4 called')
    a5callback(a6fun)
}
const a5fun=(a6callback)=>{
    console.log('f5 called')
    a6callback(a7fun)
}
const a6fun=(a7callback)=>{
    console.log('f6 called')
    a7callback()
}
const a7fun=()=>{
    console.log('f7 called')
    console.log('end of callback hell..')
}

a1fun(a2fun)