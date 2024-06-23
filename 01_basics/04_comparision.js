// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

//these is equations dont give desired o/p- avoid it because of confusing o/p
//comparison shold be between same datatypes var
// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);  //false
console.log(null == 0); //false
console.log(null >= 0); //true

console.log(undefined == 0);  //false
console.log(undefined > 0);  //false
console.log(undefined < 0);  //false

// === - checks type as well as value
//== - checks only value - can do type conversion on its own
console.log("2" === 2);  //false