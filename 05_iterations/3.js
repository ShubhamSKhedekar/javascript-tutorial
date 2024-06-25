// for of loop
//For of : is used while traversing array/string - it gives every element one by one in decalared var
//it generally returns value of array
// ["", "", ""]
// [{}, {}, {}]

//for in loop
//it usually return key of array/string

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    //console.log(num);
    //num gets value/element of array one by one
}

const greetings = "Hello world!"
for (const g of greetings) {
    //console.log(`Each char is ${g}`)
}


// Maps
//iterate map with 
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
// console.log(map);
//map destructuring:  const[key, value] of map
for (const [key, value] of map) {
    console.log(key, ':-', value);
}

//try to iterate object 
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

//throws error
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }

//works fine
//using myObject.keys() method which return array of keys of object - which we can travle unlike above 
//traversal directly
let arr2 = Object.keys(myObject);
console.log(arr2);
for(const element of arr2){
    let val = myObject[element];
    console.log(val);
}