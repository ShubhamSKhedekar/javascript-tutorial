//using Object.method - are factory functions
//using new ClassName() - can be said constructor functions

const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

// const u = Object.create(User)  //factory function
//console.log(u.email);  //H@HC.COM

//directly calling by User object
console.log(User.email);  //H@HC.COM