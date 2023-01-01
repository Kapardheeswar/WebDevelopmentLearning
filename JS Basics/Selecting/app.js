let allImages=document.querySelectorAll("img");
for (const image of allImages) {
    console.log(image.src);
    image.setAttribute("src","https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80")
}
let squareImages=document.querySelectorAll(".square");
for (const squareImage of squareImages) {
    squareImage.src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg";
}
const links=document.querySelectorAll("a");
for (const link of links) {
    link.style.color="green"
    link.style.textDecoration="underLine"
}
console.log(window.getComputedStyle(document.querySelectorAll("h1")).fontFamily);
document.querySelector("#container").style.textAlign="center";































































// const allImages = document.getElementsByTagName('img');
//
// for (let img of allImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
// }
//
//
// const squareImages = document.getElementsByClassName('square');
//
// for (let img of squareImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
// }
//
// const links = document.querySelectorAll('p a');
//
// for (let link of links) {
//     console.log(link.href)
// }