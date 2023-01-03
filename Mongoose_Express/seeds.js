const Product=require("./model/product");
const mongoose = require("mongoose");

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

const p=new Product({
     name:"Banana",
     price:15,
     category:"fruit"
});

// p.save()
//      .then(p=>{
//           console.log(p);
//      })
//      .catch(e=>{
//           console.log(e);
//      })

const seedProducts=[
     {
          name:"Grape",
          price:1.99,
          category:"fruit"
     },
     {
          name:"Fairy Eggplant",
          price:1,
          category:"vegetable"
     },
     {
          name:"Organic Watermelon",
          price:70,
          category:"fruit"
     },
     {
          name:"Organic Goddess Watermelon",
          price:99.99,
          category:"fruit"
     },
     {
          name:"Chocolate Milk",
          price:25,
          category:"dairy"
     },
]

Product.insertMany(seedProducts)
     .then(res=>{
          console.log(res);
     })
     .catch(err=>{
          console.log(err);
     })