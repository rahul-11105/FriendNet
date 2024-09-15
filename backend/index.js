const express = require("express");
const app = express();
const main = require("./connection/connectToDb");
const user = require("./model/user");
const port = process.env.PORT || 8000;


//mongoDB connection
main("mongodb://127.0.0.1:27017/FriendNet").then((res)=>{
    console.log("DB connected successfully");
})
.catch((err)=>{
    console.log("mongoDB connection error",err);
});

//routes
app.get("/",async(req,res)=>{
    const user1 = new user({
        Name:"rahul",
        Email:"rahullokhande@11105gmail.com"
    });
    try {
        await user1.save();
        res.send("<h1>Welcome to FriendNet</h1>");
    } catch (err) {
        res.status(500).send("Error saving user: " + err.message);
    }
    
});

app.listen(port,()=>{
    console.log(`app is listening at port ${port}`);
});