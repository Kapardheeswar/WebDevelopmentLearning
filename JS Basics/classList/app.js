// WRITE YOUR CODE IN HERE:
const lis=document.querySelectorAll("li");
const n=lis.length;
for (let i = 1; i < n+1; i++) {
    if (!(document.querySelector(`li:nth-of-type(${i})`).classList.contains("highlight"))){
        document.querySelector(`li:nth-of-type(${i})`).classList.toggle("highlight");
    }
    else {
        document.querySelector(`li:nth-of-type(${i})`).classList.toggle("highlight");
    }
}