const btn=document.querySelector("#colorGenerator");
const body=document.querySelector("body");
btn.addEventListener("mouseup",()=>{
     const h1=document.querySelector("h1");
     h1.innerText=randColor();
     btn.addEventListener("click", ()=>{
          body.style.backgroundColor=randColor();
     })
     let colorSum=redPercent+bluePercent+greenPercent;
     if(colorSum<100){
          h1.style.color="white";
     }
     else {
          h1.style.color="black";
     }
})
// for (let i = 0; i < 50; i++) {
//     const button=document.createElement("button");
//     button.innerText="Button";
//     body.appendChild(button);
// }
function randColor(){
     let redPercent=Math.floor(Math.random()*256);
     let greenPercent=Math.floor(Math.random()*256);
     let bluePercent=Math.floor(Math.random()*256);
     console.log(redPercent,greenPercent,bluePercent);
     return `rgb(${redPercent},${greenPercent},${bluePercent})`;
}
const buttons=document.querySelectorAll("button");
for (const button of buttons) {
     button.addEventListener("click", function (){
          button.style.backgroundColor=randColor();
          button.style.color=randColor();
     })
}
const headings=document.querySelectorAll("h1")
for (const heading of headings) {
     heading.addEventListener("click", ()=>{
          heading.style.backgroundColor=randColor();
          heading.style.color=randColor();
     })
}
window.addEventListener("keydown", function (ev){
     switch (ev.code) {
          case 'ArrowRight':
               console.log("Right!");
               break;
          case 'ArrowLeft':
               console.log("Left!");
               break;
          case 'ArrowUp':
               console.log("Up!");
               break;
          case 'ArrowDown':
               console.log("Down!");
               break;
          default:
               break;
     }
})
