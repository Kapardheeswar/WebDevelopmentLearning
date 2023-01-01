// console.log("This is From args");
// console.log(process.argv);
const args=process.argv.slice(2);
for (const arg of args) {
     console.log(`Hello there, ${arg}`);
}