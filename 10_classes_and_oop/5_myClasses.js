// ES6
//Js classes are actually object at the backend - to give feel to programmer Classes were introduced

class User {
    //any feild declared in contructor is the class feild 
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
//Here creating object of class - using new keyword
const chai = new User("chai", "chai@gmail.com", "123")
console.log(chai.encryptPassword());
console.log(chai.changeUsername());


// behind the scene - in older ver of js when class were not introduced
// function User(username, email, password){
//     this.username = username;
//     this.email = email;
//     this.password = password
// }

// User.prototype.encryptPassword = function(){
//     return `${this.password}abc`
// }
// User.prototype.changeUsername = function(){
//     return `${this.username.toUpperCase()}`
// }

// const tea = new User("tea", "tea@gmail.com", "123")
// console.log(tea.encryptPassword());
// console.log(tea.changeUsername());