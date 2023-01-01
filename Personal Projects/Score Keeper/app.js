let playerOneCount=0;
let playerTwoCount=0;
let gameCount=0;
let totalPlays=2;
let scoreString;
const h1=document.querySelector("#pointsHeader")
let playCount=document.querySelector("#playCount");
console.log(playCount)
totalPlays=playCount.value;
playCount.addEventListener("input",(e)=>{
     totalPlays=playCount.value;
     console.log(totalPlays);
})
const btn1=document.querySelector("#buttonOne");
const btn2=document.querySelector("#buttonTwo");
btn1.addEventListener("click",()=>{
     if(gameCount<totalPlays){
          playerOneCount++;
          scoreString=playerOneCount+" to "+playerTwoCount;
          console.log(scoreString);
          gameCount++;
          h1.innerText=scoreString;
     }
     if(gameCount==totalPlays){
          btn1.disabled=true;
          btn2.disabled=true;
     }
})
btn2.addEventListener("click",()=>{
     if(gameCount<totalPlays){
          playerTwoCount++;
          scoreString=playerOneCount+" to "+playerTwoCount;
          console.log(scoreString);
          gameCount++;
          h1.innerText=scoreString;
     }
     if(gameCount==totalPlays){
          btn1.disabled=true;
          btn2.disabled=true;
     }
})
const btn3=document.querySelector("#buttonThree");
btn3.addEventListener("click",()=>{
     h1.innerText="0 to 0";
     btn1.disabled=false;
     btn2.disabled=false;
     gameCount=0;
     playerOneCount=playerTwoCount=0;
})


