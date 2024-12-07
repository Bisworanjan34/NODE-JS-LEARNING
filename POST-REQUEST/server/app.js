// let express=require('express')
// let cors=require('cors')
// let app=express()
// let {MongoClient}=require('mongodb')
// let url='mongodb://localhost:27017'
// let mongocl=new MongoClient(url)
// let dbname='food-data'
// let colname='users'

// let mongo=require('./getfun')
// let {getfun}=mongo

// app.use(cors())
// app.use(express.json())


// app.get('/',(req,res)=>{
//   getfun(dbname,colname,mongocl)
//     .then((data)=>res.json(data))
//     .catch((err)=>err)
// })

// app.listen(3005,()=>console.log('server started...............on 3005')
// )

let express = require('express');
let app = express();
let cors = require('cors');
let { MongoClient } = require('mongodb');

let url = 'mongodb://localhost:27017'; 
let mongocl = new MongoClient(url);
mongocl.connect()
let dbname = 'food-data';
let colname = 'users';

app.use(cors());
app.use(express.json());

let mongoget=require('./api/getapi')
let {getdata}=mongoget
// app.get('/', (req, res) => {
        
//        getfun(dbname,colname,mongocl)
     
//        .then((data)=>res.json(data))
//        .catch((err)=>
//         res.status(500).json({ error: 'Internal Server Error', details: err.message }))
// });
//get api...............................
getdata(dbname,colname,mongocl,app)

app.listen(2025, () => console.log('Server started on port 2025'));


