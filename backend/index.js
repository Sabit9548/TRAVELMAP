const express  = require("express");
const mongoose = require("mongoose");
const app = express();
const pinRoute = require("./routes/pins");
const userRoute = require("./routes/users");
app.use(express.json());
mongoose.connect(process.env.sabit,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log("mongodb connected");
}).catch((err)=>{
    console.log("mongodb not connected")
});
app.use("/api/pins",pinRoute);
app.use("/api/users",userRoute);
app.listen(8800,()=>{
    console.log("backend server is running!!")
})
