// function multiply(x,y) {
//      return x * y;
// }
//
// function square(x) {
//      return multiply(x,x);
// }
//
// function isRightTriangle(a,b,c){
//      return square(a) + square(b) === square(c);
// }
//
// // isRightTriangle(3,4,5);
// // console.log("Great Started sending request to server");
// // setTimeout(()=>{
// //      console.log("Got Info Man, From the Server");
// // },3000);
// // console.log("WTF is this!!!!");
// const justName = (newColor, delay, callBack) => {
//      setTimeout(()=>{
//           document.querySelector("body").style.color=newColor;
//           callBack();
//      },delay);
// }
// justName("teal",1000,()=>{
//      justName("chocolate",1000,()=>{
//           console.log("Great Completed");
//      })
// })

// const demoFakeRequest = (url, success, failure) => {
//      const delay=Math.floor(Math.random()*4000)+500;
//      setTimeout(()=>{
//           if(delay>3000){
//                failure("connection timeout :(");
//           }
//           else{
//                success(`Request Success to ${url}`);
//           }
//      },delay)
// }

// demoFakeRequest("games.com/page1", (response) => {
//      console.log("It Worked");
//      console.log(response);
//      demoFakeRequest("games.com/page2", (response) => {
//           console.log("It Worked Again!!");
//           console.log(response);
//           demoFakeRequest("games.com/page3", (res) => {
//                console.log("It's Magical !!!!!!!!!!!!");
//                console.log(res);
//           }, (err) => {
//                console.log("ERROR!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",err);
//           });
//      }, (er) => {
//           console.log("ERROR!!!",er);
//      });
// }, (err) => {
//      console.log("ERROR!!!!",err);
// });

// const newDemoPromise = (resolve, reject) => {
//      resolve();
// }

const fakeRequest = (url) => {
     return new Promise((resolve, reject) =>{
          const rand=Math.random();
          setTimeout(()=>{
               if(rand<0.7){
                    resolve("This is Just some Fake Data");
               }
               reject("Request Err!!!");
          },1000)
     })
}

fakeRequest("yelpIsComing.com")
     .then((data) => {
          console.log("Done With Request");
          console.log("data is: ",data);
     })
     .catch((err) => {
          console.log("OH NO!!!!!!!",err);
     })

const colorChange=(color,delay)=>{
     return new Promise((resolve,reject)=>{
          setTimeout(()=>{
               document.body.style.backgroundColor=color;
               resolve();
          },delay)
     })
}

// colorChange("red",1000)
//      .then(() => { return colorChange("orange", 1000)})
//      .then(() => { return colorChange("yellow", 1000)})
//      .then(() => { return colorChange("teal", 1000)})
//      // .then(() => colorChange("yellow", 1000))
//      // .then(() => colorChange("green", 1000))
//      // .then(() => colorChange("blue", 1000))
//      // .then(() => colorChange("teal", 1000))


async function rainbow(){
     await colorChange("violet",1000);
     await colorChange("indigo",1000);
     await colorChange("blue",1000);
     await colorChange("yellow",1000);
     await colorChange("orange",1000);
     await colorChange("red",1000);
}
const logIn =async (userName, passWord) => {
     if(!userName||!passWord){
          throw "Missing Credentials";
     }
     if(passWord==="12345678"){
          return "WELCOME!!!";
     }
     else {
          throw "INVALID PASSWORD!!";
     }
}

logIn("Kapardheeswar","12345678")
     .then((data) => {
          console.log("Login Success");
          console.log(data);
     })
     .catch((err) => {
          console.log("LogIn Failed");
          console.log(err);
     })