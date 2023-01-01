// const data={"ticker":{"base":"BTC","target":"USD","price":"16650.34133835","volume":"3949.74003774","change":"16.62756066"},"timestamp":1672393145,"success":true,"error":""}
// console.log(typeof (data));
// console.log(data.ticker.price);
//
// const req=new XMLHttpRequest();
// req.onload= function (){
//      console.log("IT LOADED!!!");
//      console.log(this.response);
//      const dataText=JSON.parse(this.responseText);
//      console.log(dataText.name);
//      const data=JSON.parse(this.response);
//      console.log(data.height);
// }
// req.onerror= function (){
//      console.log("ERROR!!!");
//      console.log(this);
// }
// req.open("GET","https://swapi.dev/api/people/1/");
// req.send();

console.log("10000000");

// fetch("https://swapi.dev/api/people/1/")
//      .then((res) => {
//           console.log("Resolved", res);
//           return res.json();
//      })
//      .then((data) => {
//           console.log(data);
//           return fetch("https://swapi.dev/api/people/2/")
//      })
//      .then((res) => {
//           return res.json();
//      })
//      .then((data2) => {
//           console.log(data2);
//      })
//      .catch((er) => {
//           console.log("ERROR", er);
//      })

// const starWarsPeople= async ()=>{
//      const res1= await fetch("https://swapi.dev/api/people/1/");
//      const data1=await res1.json();
//      console.log(data1);
//      const res2=await fetch("https://swapi.dev/api/people/2/");
//      const data2=await res2.json();
//      console.log(data2);
// }
// starWarsPeople();
// axios.get("https://swapi.dev/api/people/1/")
//      .then((res) => {
//           console.log(res);
//      })
//      .catch((er) => {
//           console.log("ERROR!!",er);
//      })

const starWarsPerson=async (id) => {
     const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
     console.log(res.data);
}
starWarsPerson(4);
const getDadJoke=async () => {
     const config={headers:{Accept:"application/json"}}
     const res = await axios.get("https://icanhazdadjoke.com/",config);
     console.log(res.data.joke);
     const jokes=document.querySelector("#jokes");
     const newLi=document.createElement("li");
     newLi.innerText=res.data.joke;
     jokes.insertAdjacentElement("beforeend", newLi);
}
const btn=document.querySelector("button");
btn.addEventListener("click", () => {
     getDadJoke();
})

