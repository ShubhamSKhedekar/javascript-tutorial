//call and bind were used in earlier ver of js when Class was not introduced
//due to Class - problem without call and bind is removed

//call
//functionToBeCalled.call(this, args) - syntax
//call is used to call another function explicitly with passing reference of current function/object

function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername(username); // when used this - it does not call SetUserName() method

    SetUsername.call(username); // when this used - it does call method but username value is not set in
    //createuser's username - it is set in SetUserName's username - after function executes it is removed from
    //call stack - with that value set in username in SetUserName() is also removed.

    SetUsername.call(this, username); // need to pass reference of current function - creatUser using 'this'

    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);