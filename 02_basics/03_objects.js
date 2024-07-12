// singleton
// Object.create

// object literals
//creavar var symbol
const mySym = Symbol("key1");

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",  //you cannot access this by - JsUser.full name - at that time need to use JsUser[full name] syntax
    [mySym]: "mykey1",  //symbol should be used like this manner [<name>]
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
//Both gives same output - but different syntax for accessing objects elements
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)  //object.freeze method is used to prevent any changes in that object to made
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);


//varoius different feilds can be added in object
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
