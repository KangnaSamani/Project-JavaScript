const accountId = 124554
let accountEmail = "kangna@gmail.com"
var accountPassword = 12345
accountCity = "Jaipur"
let accountState;

// accountId = 2 //not allowed

accountEmail = "ks@gmail.com"
accountPassword = "55432"
accountCity = "Bengaluru"

//console.log - used to dispay
console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

// console.table - used to display in table form
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])