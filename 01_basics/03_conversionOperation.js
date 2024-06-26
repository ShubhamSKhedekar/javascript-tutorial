let score = "hitesh"

//console.log(typeof score); //string
//console.log(typeof(score)); //string

//score=33;
let valueInNumber = Number(score) //explicitly metioned Number(<feild>)
console.log(typeof valueInNumber);  //number 
console.log(valueInNumber);  //number-if score=33 & Nan-if score=hitesh

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0


let isLoggedIn = "hitesh"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);


// 1 => true; 0 => false
// "" => false
// "hitesh" => true


let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber);  //String
// console.log(typeof stringNumber);  //String


// *********************** Operations ***********************

let value = 3
let negValue = -value
console.log(negValue);  //-3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

//these is equations dont give desired o/p- avoid it because of confusing o/p
// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);  //1
// console.log(+"");  //0


let num1, num2, num3
num1 = num2 = num3 = 2 + 2


let gameCounter = 100
++gameCounter;
//console.log(gameCounter); //101

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion