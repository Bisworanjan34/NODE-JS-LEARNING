let {MongoClient}=require('mongodb')
let http=require('http')
       let mongodb_url="mongodb://localhost:27017"
     let mongoclient=new MongoClient(mongodb_url)
     let db_name="food-data"
     let  collection="users"

     async function connectMongo (){

        await mongoclient.connect()
       
       var db= mongoclient.db(db_name);
       console.log('connected to databases')

       const col=db.collection(collection)

       //fetch data from collections
        let user_data=await col.find().toArray()

        console.log(user_data)
       return user_data;
     }


     //crate server.................
     let server=http.createServer((req,res)=>{
        connectMongo()
        .then((userdata)=>res.end(JSON.stringify(userdata)))
        .catch((err)=>res.end('somthing is error',err))
     })
     server.listen(5608,()=>console.log('node server.......'))


     





