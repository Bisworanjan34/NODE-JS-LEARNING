let postproduct=(app,dbname,colname,mongocl)=>{
    app.post('/postproduct',async(req,res)=>{
        try{
            let db=mongocl.db(dbname)
            let col=db.collection(colname)
            let data=await col.insertOne(req.body)
            res.json(data)
        }
        catch(err){
            console.error('data fetching time error',err)
        }
    })
}

module.exports={postproduct}