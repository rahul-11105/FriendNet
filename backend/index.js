const express = require("express");
const app = express();
const port = process.env.PORT || 8000;




//routes
app.get("/",(req,res)=>{
    res.send("<h1>welcome to FriendNet<h1>");
});

app.listen(port,()=>{
    console.log(`app is listening at port ${port}`);
});