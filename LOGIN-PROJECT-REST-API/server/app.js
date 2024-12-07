let express=require('express')
let {MongoClient}=require('mongodb')
let cors=require('cors')

let app=express()
let url='mongodb://localhost:27017'
let mongocl=new MongoClient(url)
let dbname='login_project'
let colname='user_details'

app.use(express.json())
app.use(cors())

let {getapi}=require('./apis/getapi')
let {postapi}=require('./apis/postapi')

mongocl.connect()
.then(()=>{
    getapi(app,dbname,colname,mongocl)
    postapi(app,dbname,colname,mongocl)
})
.catch((err)=>err)

app.listen(2025,()=>console.log('server started ........in http://localhost:2025 '))