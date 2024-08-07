//Learn promise(()=>{}), then(()=>{}), catch(()=>{}) and finally(()=>{})

//1st version: promise with resolve() and then()
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve();
    }, 1000);
});
//resolve() method is connected with '.then()'
//reject() method is connected with '.catch()'  
promiseOne.then(function(){
    console.log("Promise consumed");
});

//2nd version: promise with resolve() and then()
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
});

//3rd version: promise with resolve(<param>) and then()
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})
promiseThree.then(function(user){
    console.log(user);
})

//4th version: promise with resolve(<param>) and then() and catch()
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

//we can use multiple .then() method, we use .catch() method and finally()
 promiseFour
 .then((user) => {
    console.log(user);
    return user.username;
    //above return - goes into next .then() as args
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"));
//finally() - method executes everytime


//Using async and await
//async: to be used with function in which await to be used
//await: used to indicate, untill you get response - wait here
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if (!error) {
            resolve({username: "javascript", password: "123"});
        } else {
            reject('ERROR: JS went wrong');
        }
    }, 1000);
});

async function consumePromiseFive(){
    try {
        //await promiseFive - indicates sends request and waits fro response
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();

//Fetch working
//-once we use fetch('something') - it provokes 2 things 
//-request is sent to browser to fetch data
//-Create memory, intiate 2 arrays onFullFilled[], onRejection[] - all this are empty untill data is fetched from 
//browser request
//On success--
//-Once request is successfull is fetching any data - it is counted as succesfull - and sends it into  onFullFilled[] -
//further this array stores this data into the memory which is created - which is actually accessable to user
//-Sometimes, request is made to browser through fetch,  but incase it recives 404 or etc error codes from browser
//while fetching data - it is also counted as success and sends it into  onFullFilled[]
//On failure--
//-If request is not fetch data (any data), fails to make a request to browser due to technical issue - it is counted as 
//failure - that error is sent into onRejection[] and further this array stores this data into the memory which is created - which is
//actually accessable to user


//async and await with fetch()
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
//getAllUsers()

//Replicating above code - with using fetch() with then and catch - instead of async and await
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error));

// promise.all
// yes this is also available, kuch reading aap b kro.
