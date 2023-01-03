// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
     mongoose.set('strictQuery', false);
     await mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
          .then(()=>{
               console.log("CONNECTION OPEN!!");
          })
          .catch((err)=>{
               console.log("OH NO ERROR!!");
               console.log(err);
          })
}

const productSchema=new mongoose.Schema({
     name:{
          type:String,
          required:true
     },
     price:{
          type:Number,
          min:[0,"Price must be positive!!"]
     },
     onSale:{
          type:Boolean,
          default:false
     }
});

const Product=mongoose.model("Product",productSchema);

// const bike=new Product({name:"Bike Helmet",price:50000,color:"red"})
// bike.save()
//      .then(data=>{
//           console.log("Bike Saved");
//           console.log(data);
//      })
//      .catch(err=>{
//           console.log("OHH NO ERROR!!!");
//           console.log(err.errors);
//      })

// new Product({name:"Tire Pump",price:4500}).save()
//      .then(data=>{
//           console.log("Bike Saved");
//           console.log(data);
//      })
//      .catch(err=>{
//           console.log("OHH NO ERROR!!!");
//           console.log(err.errors);
//      })

Product.findOneAndUpdate({name:"Tire Pump"},{price:-6000},{new:true,runValidators:true})
     .then(data=>{
     console.log("Bike Saved");
     console.log(data);
     })
     .catch(err=>{
          console.log("OHH NO ERROR!!!");
          console.log(err.errors);
     })