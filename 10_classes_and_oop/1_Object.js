//In Javascript, functions behaved like function and object itself, thatswhy we can multipleBy5.var/method
//function.prototype is used to set properties: variable and methods for object
//objects only has access to prototype 

function multipleBy5(num){
    return num*5
}
multipleBy5.power = 2
// console.log(multipleBy5(5)); //25
// console.log(multipleBy5.power); //2
// console.log(multipleBy5.prototype);


//using createUser - as object and function
function createUser(username, score){
    this.username = username
    this.score = score
}

//using prototype to set function() - increment and printMe - these are custom function
createUser.prototype.increment = function(){
    this.score++;
}
createUser.prototype.printMe = function(){
    //this - has reference of - function createUser
    console.log(`price is ${this.score}`);
}
const chai = new createUser("chai", 25);  //making function behave like a object using new
console.log(chai);
chai.printMe();

const tea1 = createUser("tea1", 250);  //simply calling & executing function
const tea2 = createUser("tea2", 750);  //simply calling & executing function
console.log(tea1.score);  
console.log(tea2.score);
//as only we are calling function - there is no object of function - therefore we cannot access
//tea1.score & tea2.score


/*

Here's what happens behind the scenes when the new keyword is used:
A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the 
constructor function. This means that it has access to properties and methods defined on the constructor's 
prototype.

The constructor is called: The constructor function is called with the specified arguments and this is 
bound to the newly created object. If no explicit return value is specified from the constructor, 
JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return 
a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/