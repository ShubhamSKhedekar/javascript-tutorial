//Object.getOwnPropertyDescriptor(object, "<property name>") - used to get property decription
//of particular property of an object
const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descripter);

//here we try to change PI property of Math object - which is internally defined as constant
//therefore we are unable to change it
// console.log(Math.PI);
// Math.PI = 5  //does not change
// console.log(Math.PI);

//creating object and changing its property configuration using Object.getOwnPropertyDescriptor()
const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,
    orderChai: function(){
        console.log("chai nhi bni");
    }
}
console.log(Object.getOwnPropertyDescriptor(chai, "name"));


//new configuration defination for property name of chai object is done below
Object.defineProperty(chai, 'name', {
    //writable: false,  //cannot change if false
    enumerable: true,  //cannot iterate if false
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"));


//iterating objects using for of loop - and Object.entries(<object name>) - which returns array of key,value 
//from objects
for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}