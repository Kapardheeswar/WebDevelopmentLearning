const express=require("express");
const morgan = require("morgan");
const app=express();

app.use(morgan("tiny"));

app.use((req, res, next) => {
     console.log("My first Middleware!!");
     return next();
})

app.get("/",(req, res)=>{
     res.send("HomePage")
});
app.get("/dogs",(req, res)=>{
     res.send("Dogs Page")
});



app.listen(4000, () => {
     console.log("Listening to port 4000!!");
})
