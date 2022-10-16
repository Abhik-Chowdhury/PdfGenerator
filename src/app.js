const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
// The Static path 
const static_path = path.join(__dirname,"../public");
app.use(express.static(static_path));

//The Route
app.get("",(req,res)=>{
    
    res.render("index.html")
})


app.listen(port,()=>{
    console.log(`The app running on ${port}`)
})