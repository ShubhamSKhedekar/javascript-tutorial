const name = "hitesh"
const repoCount = 50
// console.log(name + repoCount + " Value");

//using expression language to print dynamic values
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('hitesh-hc-com')
// console.log(gameName[0]);
// console.log(gameName.__proto__); 
//o/p-{} -  but actually access on browser's console - in basically inculdes methods of string (as we used __proto__ for string type variable) and various other information


//famous string functions
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

//The substring() method extracts characters from start to end (exclusive).
//The substr() method begins at a specified position, and returns a specified number of characters.
//The slice() method - The start and end parameters specifies the part of the string to extract.

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-')) //https://hitesh.com/hitesh-choudhary

console.log(url.includes('sundar')) //false - it would be truw incase url.includes('hitesh')

//const gameName = new String('hitesh-hc-com')
console.log(gameName.split('-'));  //return arr of strings - ['hitesh', 'hc', 'com']
