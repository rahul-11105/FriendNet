const express = require("express");
const app = express();
const main = require("./connection/connectToDb");
const port = process.env.PORT || 8000;


//mongoDB connection
main("mongodb://127.0.0.1:27017/FriendNet").then((res)=>{
    console.log("DB connected successfully");
})
.catch((err)=>{
    console.log("mongoDB connection error",err);
});

//routes
app.get("/",(req,res)=>{
    res.send("<h1>welcome to FriendNet<h1>");
});

app.listen(port,()=>{
    console.log(`app is listening at port ${port}`);
});