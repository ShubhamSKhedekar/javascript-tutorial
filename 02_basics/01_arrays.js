//array
const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);


// Array methods
// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) //to add 9 in beginning of array
// myArr.shift(2)  //to get back normal array by removing any unshift if it had happend ro array
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()  //join is used to have array elements to form a string with coma in between
console.log(myArr);
console.log( newArr); //0,1,2,3,4,5


// slice, splice
//slice is used to return a part of range of array without altering actual array - it does not include end index value
//splice is used to return a part of range of array with altering actual array  - it does include end index value
console.log("A ", myArr);  //A  [ 0, 1, 2, 3, 4, 5 ]
const myn1 = myArr.slice(1, 3)
console.log(myn1);  //[ 1, 2 ]

console.log("B ", myArr);  //B  [ 0, 1, 2, 3, 4, 5 ]
const myn2 = myArr.splice(1, 3);
console.log("C ", myArr);  //C  [ 0, 4, 5 ]
console.log(myn2);  //[ 1, 2, 3 ]