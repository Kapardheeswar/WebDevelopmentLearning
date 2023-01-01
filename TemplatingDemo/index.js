const express = require("express");
const app=express();
const path=require("path");
const redditData=require("./data.json");
console.log(redditData);
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"/public")));
app.get("/", (req, res) => {
     // res.send("Hai!!");
     res.render("home.ejs");
})

app.get("/rand",(req, res)=>{
     const num=Math.floor(Math.random()*10)+1
     res.render("rand.ejs",{num});
});

app.get("/r/:subreddit",(req, res)=>{
     const {subreddit}=req.params;
     const data=redditData[subreddit];
     console.log(data);
     res.render("subreddit.ejs",{ ...data });
});

app.get("/games",(req, res)=>{
     const games=["Just Cause 4","God of War","GTA","Trail Out","Shadow Warrior"];
     res.render("games.ejs",{games});
});


app.listen(3000, () => {
     console.log("Listening Port 3000");
})
