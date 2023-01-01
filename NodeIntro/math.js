const add = (a, b) => {
     return a+b;
}

const square = (x) => {
     return x*x;
}

const PI=3.14566;

// module.exports.add=add;
// module.exports.PI=PI;
// module.exports.square=square;

const math={
     add:add,
     PI:PI,
     square:square
}
module.exports=math;