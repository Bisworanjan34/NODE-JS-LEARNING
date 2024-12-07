let {MongoClient}=require('mongodb')
let express=require('express')
let app=express()
let fs=require('fs')
let url='mongodb://localhost:27017'
let port =2028;
let mongocl=new MongoClient(url)
let db_name='food-data'
let col_name='users'

    let mongofun=async()=>{
        await mongocl.connect()
        
        let db=mongocl.db(db_name)
        let col=db.collection(col_name)
        let data=await col.find().toArray()
        return data;
    }
//http.createServer((req,res)=>{})
    app.get('/',(req,res)=>{
        res.setHeader('Access-Control-Allow-Origin','*')
        mongofun()
        .then((data)=>res.json(data))
        // .then((res)=>res.data)
        .catch(err => res.status(500).json({ error: 'Internal Server Error',err }));
    })

    app.get('/simple',(req,res)=>{
        res.setHeader('Access-Control-Allow-Origin','*')
        fs.readFile('./simple.html','utf-8',(err,data)=>{
            err?
            res.send('somthing is error')
            :res.send((data))
        })
    })


    app.listen(port,()=>console.log(`server started........in 9000 `))


// const { MongoClient } = require('mongodb');
// const express = require('express');
// const app = express();

// const url = 'mongodb://localhost:27017';
// const port = 9000;
// const db_name = 'food-data';
// const col_name = 'users';

// const mongocl = new MongoClient(url);

// const mongofun = async () => {
//     await mongocl.connect();
//     const db = mongocl.db(db_name);
//     const col = db.collection(col_name);
//     const data = await col.find().toArray();
//     return data;
// };

// // Define the route
// app.get('/', async (req, res) => {
//     try {
//         const data = await mongofun();
//         res.json(data); // Send JSON response
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

// // Start the server
// app.listen(port, () => console.log(`Server started on port ${port}`));
