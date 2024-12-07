let{ObjectId}=require('mongodb')
let updateuser=(app,dbname,colname,mongocl)=>{
    app.get('/updateuser/:id',async(req,res)=>{
        try{
            let db=mongocl.db(dbname)
            let col=db.collection(colname)
            let {id}=req.params
            let data=await col.findOne({_id:new ObjectId(id)})
            res.json(data)
        }
        catch(err){
            console.error('data fetching time error',err)
        }
    })
}

module.exports={updateuser}