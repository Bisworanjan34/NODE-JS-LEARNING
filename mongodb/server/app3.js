let {MongoClient}=require('mongodb')
let http=require('http')
let url='mongodb://localhost:27017'
let mongocl=new MongoClient(url)
let db_name='food-data'
let col_name='users'

let mongofun=async ()=>{
    await mongocl.connect()

    let db=mongocl.db(db_name)

    let col=db.collection(col_name)

    let data=await col.find().toArray()

    return data;
}
let server=http.createServer((req,res)=>{
    mongofun()
    .then((d)=>res.end(JSON.stringify(d)))
    .catch((er)=>res.end(er,'somthing is error'))
})

server.listen(1012,()=>{
    console.log('server started app.3...........')
})