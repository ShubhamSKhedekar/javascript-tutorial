// Immediately Invoked Function Expressions (IIFE)
//It calling function as soon as application/software is loaaded
//it might have database conn/ aws / intialization of some values etc in begining/early
//syntax: (function(){})();  OR (()=>{})();
//2nd () - is catually calling function
//; after calling is important it says this function is called now execute further code

//Immediately Invoked Function are used to prevent pollution of function to be called


//normal function
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

//using arrow function with parameters
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
