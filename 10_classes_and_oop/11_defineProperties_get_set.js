//getters and setters method to be defined - using Object.defineProperty(objectName, propertyName, {}) 
//this is used in earlier - when class was not introduced

//this getters and setters method as some benefits as explained in 10_getter_setter.js - but only defined
//using Object.defineProperty(objectName, propertyName, {}) 

function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    });

    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    });

}

const chai = new User("chai@chai.com", "chai")
console.log(chai.email);  //CHAI@CHAI.COM - becomes in capital - because in get method we are altering feild value