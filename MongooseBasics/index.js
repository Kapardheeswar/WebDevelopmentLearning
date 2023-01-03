// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
     mongoose.set('strictQuery', false);
     await mongoose.connect('mongodb://127.0.0.1:27017/moviesApp')
          .then(()=>{
               console.log("CONNECTION OPEN!!");
          })
          .catch((err)=>{
               console.log("OH NO ERROR!!");
               console.log(err);
          })
}

const movieSchema = new mongoose.Schema({
     title:String,
     rating:String,
     year:Number,
     score:Number
});

const Movie=mongoose.model("Movie",movieSchema);

// const hungerGames=new Movie({title:"Hunger Games",rating:"PG-13",year:2012,score:68});

// Movie.insertMany([
//      {title:"Hunger Games",rating:"PG-13",year:2012,score:6.8},
//      {title:"Alien",year:1979,score:8.1,rating:"R"},
//      {title:"The Iron Giant",year:1999,score:7.5,rating:"PG"},
//      {title:"Stand By Me",year:1986,score:8.6,rating:"R"},
//      {title:"Moonrise Kingdom",year:2012,score:7.3,rating:"PG-13"},
// ]).then((data)=>{
//      console.log("IT Worked!");
//      console.log(data);
// })



