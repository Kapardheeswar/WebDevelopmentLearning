const express = require("express");
const path = require("path");

// getting-started.js
const mongoose = require('mongoose');

const Product=require("./model/product");

main().catch(err => console.log(err));

async function main() {
     mongoose.set('strictQuery', false);
     await mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
          .then(()=>{
               console.log("MONGO CONNECTION OPEN!!");
          })
          .catch((err)=>{
               console.log("OH NO MONGO CONNECTION ERROR!!");
               console.log(err);
          })
}


const app=express();
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));


app.get("/products",async (req, res)=>{
     const products=await Product.find({});
     res.render("products/index.ejs",{products});
});

app.get("/products/new",(req, res)=>{
     res.render("products/new.ejs");
});

app.post("/products", async (req, res) => {
     const newProduct=new Product(req.body);
     await newProduct.save();
     console.log(newProduct);
     res.redirect(`/products/${newProduct._id}`);
})

app.get("/products/:id",async (req, res)=>{
     const {id}=req.params;
     const product=await Product.findById(id);
     res.render("products/show.ejs",{product});
});


app.listen(3000, () => {
     console.log("Listening to port 3000");
})