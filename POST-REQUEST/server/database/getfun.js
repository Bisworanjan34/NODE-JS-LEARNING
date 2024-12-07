
// let mongoget=async(mongocl,dbname,colname)=>{
//     await mongocl.connect()
//     let db=mongocl.db(dbname)
//     let col=db.collection(colname)
//     let data=await col.find().toArray()
//     return data
// }

// module.exports={getfun:mongoget}
// let mongoget = async (dbname, colname, mongocl) => {
//             await mongocl.connect()
//     try {
//         let db = mongocl.db(dbname);
//         let col = db.collection(colname);
//         let data = await col.find().toArray();
//         return data;
//     }
//     catch (err) {
//         console.error('Error accessing MongoDB:', err);
      
//     }
// };
// module.exports = { getfun: mongoget };
