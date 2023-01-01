const joke=require("give-me-a-joke");
const color = require("colors");
// console.log(joke);
joke.getRandomDadJoke((joke) => {
     console.log(joke.rainbow);
})
var cowsay = require("cowsay");

console.log(cowsay.say({
     text : "Anurag is bokka".rainbow,
     e : "oO",
     T : "U "
}));

var figlet = require('figlet');

figlet('Kapardhi!!', function(err, data) {
     if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
     }
     console.log(data.rainbow)
});