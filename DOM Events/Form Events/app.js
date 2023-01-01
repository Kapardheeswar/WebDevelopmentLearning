const form=document.querySelector("#form");
const input=document.querySelector("#gameName");
const gameList=document.querySelector("#games");
form.addEventListener("submit",function (ev) {
     ev.preventDefault();
     console.log("Submitted");
     console.log(input.value);
     const listItem=document.createElement("li");
     listItem.innerText=input.value;
     gameList.insertAdjacentElement("beforeend",listItem);
     input.value=""
})