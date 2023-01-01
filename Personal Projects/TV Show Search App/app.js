const form=document.querySelector("#searchForm");
form.addEventListener("input", async (ev) => {
     ev.preventDefault();
     console.log("SUBMITTED!!");
     console.log(form.elements.q.value);
     const searchTerm=form.elements.q.value;
     const config={params:{q:searchTerm}}
     const res=await axios.get(`https://api.tvmaze.com/search/shows`,config);
     console.log(res.data);
     if(true){
          deleteAllShows();
          getAllShows(res.data);
     }
})

function getAllShows(array) {
     for (const arrayElement of array) {
          const div=document.createElement("div");
          const img=document.createElement("img");
          if(arrayElement.show.image){
               img.src=arrayElement.show.image.medium;
          }
          else{
               img.src="https://www.shutterstock.com/image-vector/no-image-available-vector-hand-260nw-745639717.jpg";
          }
          img.style.display="block";
          const tag=document.createElement("span");
          tag.innerText=arrayElement.show.name;
          const para=document.createElement("p");
          para.innerHTML=arrayElement.show["summary"];
          div.insertAdjacentElement("beforeend", img);
          div.insertAdjacentElement("beforeend", tag);
          div.insertAdjacentElement("beforeend", para);
          document.body.append(div);
     }
}

function deleteAllShows() {
     const divs=document.querySelectorAll("div");
     for (const div of divs) {
          div.remove();
     }
}