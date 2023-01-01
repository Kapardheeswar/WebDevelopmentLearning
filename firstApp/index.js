const express = require("express");
const app=express();
// console.dir(app.get);
// app.use((request,response) => {
//      console.log("WE got a new Request!!");
//      response.send("<h1>This is new Heading</h1>");
// })

app.get("/cats",(req, res)=>{
     console.log("Cat Request");
     res.send("MEOWWWWWWWWW!!!");
});
app.post("/cats",(req, res)=>{
     console.log("Cat post Request");
     res.send("CAT Post response!!!!");
});
app.get("/dogs",(req, res)=>{
     console.log("Dog Request");
     res.send("BOWWWWWWWWW!!!");
});
app.get("/",(req, res)=>{
     console.log("Home Page Request");
     res.send("<h1>This is HomePage Right KK</h1>");
})
app.get("/:subreddit/:id", (req, res) => {
     // const subReddit = req.params.subreddit;
     const {subreddit,id}=req.params;
     // console.log(subReddit);
     res.send(`<h1>This is ${subreddit} page with an id of ${id}</h1>`);
})
app.get("/search", (req, res) => {
     console.log(req.query);
     const {q}=req.query;
     res.send(`<h1>You searched for ${q}</h1>`)
})
app.get("*", (req, res) => {
     res.send("There is No Path Man Sorry :(");
})
app.listen(3000, () => {
     console.log("Listening in port 3000!!");
})