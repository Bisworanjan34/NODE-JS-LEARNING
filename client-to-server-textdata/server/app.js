let express=require('express')
let fs=require('fs')
let cors=require('cors')
let app=express()
let {MongoClient}=require('mongodb')
let url='mongodb://localhost:27017'
let mongocl=new MongoClient(url)
let db_name='food-data'
let col_name='users'
let port=2027
app.use(express.json());
app.use(cors())
let mongofun=async()=>{
    await mongocl.connect()
    let db=mongocl.db(db_name)
    let col=db.collection(col_name)
    let data=await col.find().toArray()
    return data;

}
let mongoget=async(req)=>{
    await mongocl.connect()
    let db=mongocl.db(db_name)
    let col=db.collection(col_name)
    let data=await col.insertOne(req.body)
    return data;

}

app.get('/',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    mongofun()
    .then((data)=>res.json(data))
    .catch((err)=>console.log(err,'somthing is error'))
})
app.get('/node',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    
    fs.readFile('./node.html','utf-8',(err,data)=>{
        err?
        res.send('somthing is error')
        :res.send(data)
    })
})

app.post('/',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    mongoget(req)
    .then((data)=>res.json(data))
    .catch((err)=>console.log(err,'somthing is error'))
})

app.listen(port,()=>console.log('server started on 3000................'))