const score = 400
// console.log(score);

const balance = new Number(100)
//also balance = Number(100);

// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(4));
//prescision when said toPrecision(4) - it will focus at 4th index value in number i.e. in 123.8966 at 8 it will focus
//and try to get closest possible number that is 9 : 123.9
//if toPrecision(3): 124

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

//Maths functions
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));


//generate random number - Math.random() gives o/p between 0-1(exclusive) i.e. 0.3,0.2,--0.9 etc
console.log(Math.random());
console.log((Math.random()*10) + 1); //to get value >=1 to 10
console.log(Math.floor(Math.random()*10) + 1); //to get value >=1 to 10

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min) //learn formula to get value between range
