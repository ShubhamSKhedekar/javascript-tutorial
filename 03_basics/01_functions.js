
//Function declaration 

function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
// sayMyName()


// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }


function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}
const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage())  //incase we pass as arg empty while calling - username=sam by default
//sam
console.log(loginUserMessage("hitesh")) // incase we pass args - username=passed arg
//hitesh


//to pass number of args when we dont know eaxct count args 
function calculateCartPrice(val1, val2, ...num1){
    //here val1=200, val2=400 and rest will be in num1 array = [ 500, 2000]
    return num1
}
function calculateCartPrice(...num1){
    //all are in array num1 [200, 400, 500, 2000]
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000))


//pass an object in function args
const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
// handleObject({
//     username: "sam",
//     price: 399
// })

//pass array in args
const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
//console.log(returnSecondValue([200, 400, 500, 1000]));