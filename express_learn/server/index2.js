// with out http require because express internally added the http funtion 
// express is framework 
let express=require('express')
let app=express()
let port=4004;
app.get('/',(req,res)=>{
    return res.send('this is home page')
})
app.get('/about',(req,res)=>{
    return res.send('this is about page')
})

app.listen(port,()=>{console.log('server started')})