// const tinderUser = new Object()
const tinderUser = {}  //same as above

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser);
console.log(Object.keys(tinderUser));  //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));  //[ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser));  //[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);  //hitesh

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//try to merge more than 1 objects together
// const obj3 = { obj1, obj2 }  //obj3 has separate obj1 and obj2 - not reuired
// const obj3 = Object.assign({}, obj1, obj2, obj4)  //it merges more than 1 objects together - but complicated
const obj3 = {...obj1, ...obj2}   //easy merge technique
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]
users[1].email


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
//console.log(course.courseInstructor);


//object destructuring
const {courseInstructor} = course  //same as below, but in below we gave name to courseInstructor
console.log(courseInstructor);  
// const {courseInstructor: instructor} = course
// console.log(instructor);  


//Json objects 
//keys are also are in string - normally in objects key are not string
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
