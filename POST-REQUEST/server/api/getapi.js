
// let mongogetfun=(dbname,colname,mongocl,app)=>{

//     let mongoget = async () => {
//         await mongocl.connect()
// try {
//     let db = mongocl.db(dbname);
//     let col = db.collection(colname);
//     let data = await col.find().toArray();
//     return data;
// }
// catch (err) {
//     console.error('Error accessing MongoDB:', err);
  
// }
// };
// // module.exports = { getfun: mongoget };
//         app.get('/', (req, res) => {
//         mongoget()
//         .then((data)=>res.json(data))
//         .catch((err)=>
//          res.status(500).json({ error: 'Internal Server Error', details: err.message }))
//     });
// }
// module.exports={mongogetfun:mongogetfun}

// const getdata = (dbname, colname, mongocl, app) => {
//     app.get('/', async (req, res) => {
//         try {
//             await mongocl.connect();
//             const db = await mongocl.db(dbname)
//             const col=await db.collection(colname)
//             const data=await col.find().toArray();
//             res.json(data);
        // } catch (err) {
        //     console.error('Error accessing MongoDB:', err);
        //     res.status(500).json({ error: 'Internal Server Error', details: err.message });
//         }
//     });
// };

let getdata=(dbname, colname, mongocl, app)=>{
    app.get('/',async(req,res)=>{
        // await mongocl.connect()
       try{
        let db=mongocl.db(dbname)
        let col=db.collection(colname)
        let data=await col.find().toArray()
        res.json(data)
       }
       catch(err){
        console.error('somthing is error',err)
       }
    })
}
module.exports = { getdata };
