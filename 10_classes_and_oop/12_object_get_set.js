//using Object.method - are factory functions
//using new ClassName() - can be said constructor functions

//_<property Name> - indicates as that feikd has become private - (not actually becomes private - it is refered as private)

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
