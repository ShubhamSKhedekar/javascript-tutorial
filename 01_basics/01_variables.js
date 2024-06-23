const accountId = 144553
let accountEmail = "hitesh@google.com"  
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed as its declared as const earlier in code
accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var - only try to use let keyword
because of issue in, block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
//console.table is used to print values in table format in console.