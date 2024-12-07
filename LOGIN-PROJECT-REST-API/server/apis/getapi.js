let getapi=(app,dbname,colname,mongocl)=>{
    app.get('/signup',async(req,res)=>{
      try{
        let db=mongocl.db(dbname)
        let col=db.collection(colname)
        let result=await col.find().toArray()
        res.json(result)
      }
      catch(err){
        console.log('somthing is error when post request get')
      }
    })

    app.post('/login', async (req, res) => {
      try {
          let { name, password } = req.body;
          let db = mongocl.db(dbname);
          let col = db.collection(colname);
          let user = await col.findOne({ name, password });
          if (user) {
              res.json({ success: true, message: "Login successful!" });
          } else {
              res.json({ success: false, message: "Username or password is incorrect." });
          }
      } catch (err) {
          console.error('Error during login request:', err);
          res.status(500).json({ success: false, message: "Server error." });
      }
  });
}
module.exports={getapi}