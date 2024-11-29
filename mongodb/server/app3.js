let http=require('http')
let {MongoClient}=require('mongodb')
let url='mongodb://localhost:27017'
let mongocl=new MongoClient(url)
let dbname='food-data'
let colname='users'

let mongofun=async()=>{
    await mongocl.connect()

    let db=mongocl.db(dbname)
    let col=db.collection(colname)

    let data=await col.find().toArray()
    return data; 
}

let server=http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    mongofun()
    .then((data)=>res.end(JSON.stringify(data)))
    .catch((err)=>res.end(err,'somthing is error'))
})

server.listen(2025,()=>console.log('server staarted'))