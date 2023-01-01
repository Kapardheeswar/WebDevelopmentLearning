console.log("Hai this is Kapardhi")
let shit=["Hero",12.099,789,NaN,undefined,false,["KK",25,7,2003]]
console.log(shit[6][3])
shit.push(5)
console.log(shit.length)
console.log(shit[7])
shit.unshift("hai");
shit.shift();
console.log(shit)
let math={
    square: function (num) {
        return num**2;
    },
    cube(num) {
        return num**3;
    },
    PI: 3.14
}
let square={
    area: function (num) {
        return num*num;
    },
    perimeter: function (num){
        return num*4;
    }
}
let hen={
    name:"Helen",
    eggCount:0,
    layAnEgg: function(){
        this.eggCount++;
        return "EGG";
    }
}
const arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// for(let i=0;i<arr.length;i++){
//     print(arr[i]);
// }
// function print(x){
//     console.log(x);
// }
arr.forEach(function (l){
    if(l%2==0){
        console.log(l);
    }
});

const arrNew=arr.map(function (x) {
    return x*2;
})
const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];
const firstNames=fullNames.map(function (name) {
    return name.first;
});
console.log(firstNames);
const multiply=(x,y)=>{
    return x*y;
}
console.log(multiply(5,6));
const rollDie=()=>{
    return Math.floor(Math.random()*6)+1;
}

const greet=(string)=>{
    return "Hey"+" "+string+"!";
}
const addition=(a,b)=>a+b;
console.log("Kapardhi is Good");

setTimeout(()=>{
    console.log("Hai")
},3000);

const id=setInterval(()=>{
    console.log(Math.random())
},1000)
const goodNames=fullNames.filter(x=>x.last.length<10)
const goodFirstNames=goodNames.map(function (x) {
    return x.first;
});

const userNames=['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan'];

const validUserNames=userNames.filter((names)=>names.length<10);
console.log(validUserNames);

arr.every((x)=>{
    x<=20;
})

// function allEvens(array) {
//     return array.every(element=>element%2===0);
// }
function allEvens(array) {
    return array.every(function (element) {
        return element%2===0;
    });
}

const odds=[1,3,5,7];
const minimum=odds.reduce((min,currentValue)=>{
    if(min>currentValue){
        return currentValue;
    }
},99999);

const str="WonderFul";
const object={...str};
console.log(object)
const str1=object;
console.log(typeof (str1));
const obj1={...str1};
console.log(obj1)

function sum() {
    return arguments.reduce((sum,currentValue)=>sum+=currentValue);
}
// function findSum(...nums){
//     return nums.reduce((total,currentValue)=>total+=currentValue);
// }
function findSum(...nums){
    return nums.reduce(function (total,currentValue){
        total+=currentValue;
        return total;
    })
}
