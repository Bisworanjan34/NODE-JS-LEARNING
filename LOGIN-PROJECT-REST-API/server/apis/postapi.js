let postapi=(app,dbname,colname,mongocl)=>{
    app.post('/signup',async(req,res)=>{
      try{
        let db=mongocl.db(dbname)
        let col=db.collection(colname)
        let result=await col.insertOne(req.body)
        res.json(result)
      }
      catch(err){
        console.log('somthing is error when post request get')
      }
    })
}
module.exports={postapi}