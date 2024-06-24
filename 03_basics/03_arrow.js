//this key word is used under object
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); //will print some random context values

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);  //will throw an error due to this keyword
// }
// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);   //will throw an error due to this keyword
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);   //will print some random context values
}
// chai()

//Arraw functions declaration
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
//return to only write incase we are using {}

// const addTwo = (num1, num2) =>  num1 + num2
//no return should be written

// const addTwo = (num1, num2) => ( num1 + num2 )
//no return should be written

//returning object from function addTwo
const addTwo = (num1, num2) => ({username: "hitesh"});
console.log(addTwo(3, 4))

// const myArray = [2, 5, 3, 7, 8]
// myArray.forEach() - will learn later about loops