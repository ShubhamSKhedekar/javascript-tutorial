//without using getters and setters method, - constructor only used to set
//values of feild and also to get same feild values

//while getting value - you will get same value which you have set through constructor
//whereas when using getters and setters method - what value is set and what value we get can be different
//as we use get and set method we can make alter feild value in set or get method accordingly
class User1 {
    constructor(email, password){
        this.email = email;
        this.password = password
    }
}

const a = new User1("shubham@gmail.ai", "abc123")
console.log(a.email);

//------------------------------------------------------------------------

//when we use getter and setter methods - while setting feild value ands getting feild value
//the value can be altered
//Also in getter and setter method - feild value is set by set method and not by constructor
//constructor is likely to define pattern - in which new object of class to be created
//And when we write objectName.feildName - b.email - it calls get method to return value

//set and get method should be define - with orginal feild value name
//and to use '_<originalFeildName>' to set and get value
//if we use originale feilds name - it creates confusion in who will set/get feild value between
//constructor and get/set methods - results into error - max callstack reached

class User2 {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `PSWD${this._password}`;
    }

    set password(value){
        this._password = value
    }
}

const b = new User2("khedekar@gmsila", "abc456");
console.log(b.email);  //KHEDEKAR@GMSILA - we get different email while get
console.log(b.password);  //PSWDabc456 -  we get different password while get


