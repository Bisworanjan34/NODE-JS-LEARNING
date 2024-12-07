
let postfun=(app,dbname,colname,mongocli)=>{
    app.post('/',async(req,res)=>{
       try{
        let db=mongocli.db(dbname)
        let col=db.collection(colname)
        let data =await col.insertOne(req.body)
        res.json(data) 
       }
       catch(err){
        console.error('somthing is error')
       }
    })
}

module.exports={postfun}