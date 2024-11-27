let {MongoClient}=require('mongodb')
let http=require('http')
       let mongodb_url="mongodb://localhost:27017"
     let mongoclient=new MongoClient(mongodb_url)
     let db_name="food-data"
     let  collection="users"

     async function connectMongo (res){

        await mongoclient.connect()
       
       var db= mongoclient.db(db_name);
       console.log('connected to databases')

       const col=db.collection(collection)

       //fetch data from collections
        let user_data=await col.find().toArray()

        console.log(user_data)
        res.end(JSON.stringify(user_data))
     }

     let server=http.createServer((req,res)=>{
        connectMongo(res)
     })
     server.listen(5658,()=>console.log('node server.......'))


     





