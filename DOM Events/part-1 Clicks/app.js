const btn=document.querySelector("button");
//Okay Method
btn.onclick=()=> console.log("Wow You Just Woke up a Dragon");
//Normal Used Method
const btn2=document.querySelector(".v2")
btn2.addEventListener("click",()=>{
    alert("Great You got IT!!")
})
const btn3=document.querySelector(".v3");
// btn3.addEventListener("mouseup",()=>{
//     prompt("WonderFull");
// })
btn3.addEventListener("mouseup",()=>{
    alert("Great Man WonderFul");
})

const helloButton=document.querySelector("#hello");
helloButton.addEventListener("click",()=>console.log("hello"));

const goodByeButton=document.querySelector("#goodbye");
goodByeButton.addEventListener("click",()=>console.log("goodbye"));
