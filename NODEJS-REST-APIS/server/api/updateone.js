let {ObjectId}=require('mongodb')
let updateone=(app,dbname,colname,mongocl)=>{
    app.put('/updateone',async(req,res)=>{
        try{
            let newdata=req.body
            let id=newdata._id
            delete newdata._id
            let db=mongocl.db(dbname)
            let col=db.collection(colname)
            let data=await col.updateOne({_id:new ObjectId(id)},{$set:newdata})
            res.json(data)
        }
        catch(err){
            console.error('data fetching time error',err)
        }
    })
}

module.exports={updateone}