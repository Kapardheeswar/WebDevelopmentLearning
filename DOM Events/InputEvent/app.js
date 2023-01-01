const input=document.querySelector("input");
input.addEventListener("input",function (ev) {
     console.log(this.value);
     const h1=document.querySelector("h1");
     const string="Welcome, "+this.value;
     h1.innerText=string;
     if(this.value===""){
          h1.innerText="Enter Your Username";
     }
})
