let{ObjectId}=require('mongodb')
let deleteone=(app,dbname,colname,mongocl)=>{
    app.delete('/deleteone/:id',async(req,res)=>{
        try{
            let {id}=req.params
            let db=mongocl.db(dbname)
            let col=db.collection(colname)
            let data=await col.deleteOne({_id:new ObjectId(id)})
            res.json(data)
        }
        catch(err){
            console.error('data fetching time error',err)
        }
    })
}

module.exports={deleteone}