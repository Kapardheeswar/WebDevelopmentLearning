const express=require("express");
const app=express();
const path = require("path");
const methodOverride=require("method-override");
const { v4: uuid } = require('uuid');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(methodOverride("_method"));


app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

let comments=[
     {
          id:uuid(),
          username:"Kapardhi",
          comment:"lol that is so funny"
     },
     {
          id:uuid(),
          username:"Anurag",
          comment:"lol that is so bulky"
     },
     {
          id:uuid(),
          username:"Charan",
          comment:"lol he is a Physco"
     },
     {
          id:uuid(),
          username:"Siddu",
          comment:"lol he is so manly"
     },
     {
          id:uuid(),
          username:"Yesh",
          comment:"lol he is nothing like Yash"
     }
]

app.get("/comments",(req, res)=>{
     res.render("comments/index",{comments});
});

app.get("/comments/new",(req, res)=>{
     res.render("comments/newComment");
});

app.post("/comments",(req, res)=>{
     console.log(req.body);
     let newComment={};
     newComment.username=req.body.username;
     newComment.comment=req.body.comment;
     newComment.id=uuid();
     comments.push(newComment);
     // res.send("IT WORKED!!");
     res.redirect("/comments");
});

app.get("/comments/:id",(req, res)=>{
     const { id }=req.params;
     const findComment= comments.find(x=> x.id===id);
     console.log(findComment);
     res.render("comments/show",{findComment});
});

app.get("/comments/:id/edit", (req, res) => {
     const {id} = req.params;
     const comment = comments.find((element) => element.id === id);
     res.render("comments/edit", {comment});
});

app.patch("/comments/:id", (req, res) => {
     const { id }=req.params;
     const newComment=req.body.comment;
     const foundComment= comments.find((element) => element.id === id);
     foundComment.comment=newComment;
     res.redirect("/comments")
});

app.delete("/comments/:id", (req, res) => {
     const { id }=req.params;
     comments=comments.filter(x => x.id !== id);
     res.redirect("/comments");
})

app.listen(3000,()=>{
     console.log("Listening to port 3000");
})