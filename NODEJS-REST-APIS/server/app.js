let express=require('express')
let {MongoClient}=require('mongodb')
let cors=require('cors')

let url='mongodb://localhost:27017'
let mongocl=new MongoClient(url)
let app=express()
let dbname='products'
let colname='productItems'

app.use(express.json())
app.use(cors())

let {productGet}=require('./api/products')
let {updateone}=require('./api/updateone')
let {updateuser}=require('./api/updateuser')
const { deleteone } = require('./api/deleteproduct')
const { postproduct } = require('./api/postproduct')



mongocl.connect()
.then(()=>{
    console.log('database connected......')
    productGet(app,dbname,colname,mongocl)
    updateone(app,dbname,colname,mongocl)
    updateuser(app,dbname,colname,mongocl)
    deleteone(app,dbname,colname,mongocl)
    postproduct(app,dbname,colname,mongocl)
    
  
})
.catch((err)=>err)

app.listen(2025,()=>console.log('server started in 2025........'))