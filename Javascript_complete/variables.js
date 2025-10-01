const accountId = 123456789
let accountEmail = "sonu.sapri@gmil.com"
var accountPassword = "12345"
accountCity = "Bangalore"
let accountState; // undefined

// accountId = 11245 cannot change const variable (Not allowed)

accountEmail = "sonu@gmail.com"
accountPassword = "60960"
accountCity = "hyderabad"

console.log(accountId);

/*
prefer not to use var 
because of issue in block scope and functional scope  
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
