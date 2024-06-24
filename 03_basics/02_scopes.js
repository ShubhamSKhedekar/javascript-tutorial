var c = 90  
//var does not follow any scope, therefore var is to be avoided
//var represents only global scope

//let and const is only used while declaring variables - this obey scopes
let a = 300  
if (true) {
    //scope of below a is in 'if' only
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    //console.log(c);
    c=187;
}

// console.log(a); //a=300
// console.log(b); //notdefined - as declared inside if condition scope is limited with it
// console.log(c); 
//global var c=90 and inside var c = 187 
//so of some developer changes value inside {} like here if, value of that variable changes
//for entire code - which is not desirable
//look at a var, global a = 300, inside if a=10 - but globally value of a remains same untill we chnage
//it globally - inside if condt we use a=10 only and but globally it is 300 - scope come in picture


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);  //throw an error - not found variable website due to scope issue

     two()
}
one()



if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);  //will work
    }
    // console.log(website);  //throw an error - not found variable website due to scope issue
}
//console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++
console.log(addone(5)) //works fine

function addone(num){  
    return num + 1;
}
console.log(addone(5))  //works fine

//above function is declared in this pattern
//function funcname (){} - such type of function can be called by - name() by placing it above or below
//function declared


addTwo(5)  //will trow an error - not found addTwo var - as calling before declaration
const addTwo = function(num){  
    return num + 2;
}
addTwo(5) //will work as calling after declaration
//above function is declared in this pattern
//const funcname = function(){} - here var is storing a function so if you try to access function by itts
//name (which is variable) before it is declared - then throws error - not found