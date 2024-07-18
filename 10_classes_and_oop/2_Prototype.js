// let myName = "hitesh     "
// let mychannel = "chai     "
// console.log(myName.trueLength); //thorws error because myName(string) does not have default method trueLength()


let myHeros = ["thor", "spiderman"]  //array
let heroPower = {   //object
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

//In Object -means it refering to global Object - in that add some functions of your own
Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

//In array object - when any one declares any array that array object will get access to 
//heyHitesh function
Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()  //hitesh is present in all objects
// myHeros.hitesh() //hitesh is present in all objects
// myHeros.heyHitesh() //Hitesh says hello
// heroPower.heyHitesh()  //error - because in Array object we have added custom function heyHitesh(), not in global Object


// inheritance
//__proto__ is keyword for prototype

//old way to set prototype
const User = {
    name: "chai",
    email: "chai@google.com"
}
const Teacher = {
    makeVideo: true
}
//In Teacher object set prototype property as __proto__ = <another object>
Teacher.__proto__ = User
console.log(Teacher);

const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

// modern syntax to set prototype
Object.setPrototypeOf(TeachingSupport, Teacher);

console.log(Teacher.__proto__);
console.log(TeachingSupport.__proto__);


//Make use of prototype to add custom function trueLength() - which trims string
let anotherUsername = "ChaiAurCode     "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}
// anotherUsername.trueLength()  //True length is: 11
// "hitesh".trueLength()  //True length is: 6
