const express = require("express");
const app = express();
const coin = require("./coin")



app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});




app.get("/coin", (req , res) => {
  
    let param = req.query.search;
    
console.log(param)
    async function coinData() {
      try {
        
        let data = await coin(param)
        
        if(data.length>0) res.status(200).send({data})
        else res.status(400).send({})

      } catch (error) {
        console.log(error)
      res.status(500).send({message:"Something went wrong"})
      }
    }
    
    coinData()

    

     
     
})



app.listen(3000, "0.0.0.0", 1, () => console.log('Server running on port 3000'))