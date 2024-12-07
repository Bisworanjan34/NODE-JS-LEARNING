let productGet=(app,dbname,colname,mongocl)=>{
    app.get('/products',async(req,res)=>{
        try{
            let db=mongocl.db(dbname)
            let col=db.collection(colname)
            let data=await col.find().toArray()
            res.json(data)
        }
        catch(err){
            console.error('data fetching time error',err)
        }
    })
}

module.exports={productGet}