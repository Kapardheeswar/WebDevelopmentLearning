const fs=require("fs");
// console.log(fs);

// fs.mkdir('apples', { recursive: true }, (err) => {
//      console.log("1000");
//      if (err) throw err;
// });
//
// console.log("50000");

const folderName=process.argv[2]||"Project";
fs.mkdirSync(folderName);
// fs.writeFileSync(`${folderName}/index.html`);
// fs.writeFileSync(`${folderName}/style.css`);
// fs.writeFileSync(`${folderName}/app.js`);

fs.writeFile(`${folderName}/index.html`, 'Hello Node.js', 'utf8', (err)=>{
     if(err){
          throw err;
     }
});
fs.writeFile(`${folderName}/style.css`, '', 'utf8', (err)=>{
     if(err){
          throw err;
     }
});
fs.writeFile(`${folderName}/app.js`, '', 'utf8', (err)=>{
     if(err){
          throw err;
     }
});