
let getfun=(app,dbname,colname,mongocli)=>{
    app.get('/',async(req,res)=>{
       try{
        let db=mongocli.db(dbname)
        let col=db.collection(colname)
        let data =await col.find().toArray()
        res.json(data) 
       }
       catch(err){
        console.error('somthing is error')
       }
    })
}

module.exports={getfun}