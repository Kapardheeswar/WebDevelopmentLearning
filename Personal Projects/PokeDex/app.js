for (let i = 1; i < 800; i++) {
    const div=document.createElement("div");
    const newImg=document.createElement("img");
    const tag=document.createElement("span");
    tag.append(`#${i}`);
    newImg.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
    div.append(newImg);
    div.append(tag);
    div.style.display="inline-block";
    div.style.textAlign="center";
    newImg.style.display="block";
    // tag.style.textAlign="center"
    const container=document.querySelector(".container");
    container.append(div);
}