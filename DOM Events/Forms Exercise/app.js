// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
form.addEventListener("submit", function (ev) {
     ev.preventDefault();
     const product=document.querySelector("#product");
     const qty=document.querySelector("#qty");
     const string=qty.value+" "+product.value;
     console.log(string);
     const list=document.querySelector("#list");
     const listItem=document.createElement("li");
     listItem.innerText=string;
     list.insertAdjacentElement("beforeend", listItem);
     product.value="";
     qty.value="";
})