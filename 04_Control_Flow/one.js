// if

// if true code inside the if block will be executed
// if(true){

// }
// if false code inside the if block will not be executed
// if(false){

// }

const isUserloggedIn = true
if(isUserloggedIn){
    console.log("yes user is logged in");
}

if(2 == "2"){
    console.log("2 is equal to '2'");//2 is equal to '2' bcz == first converts the string datatype into number and then check the condition
}

if(2 === "2"){
    console.log("2 is equal to '2'");//this if block is not executed as === also checks the datatypes and here one is number and other is string
}

const  temperature = 41

if(temperature < 50){
    console.log("less than 50");
}
console.log("temperature is greater than 50");//less than 50
                                              //temperature is greater than 50 //this is executed bcz it is outside the conditional block
                                              //the code which is outside the coditional block is executed whether the condition is true or false

if(temperature < 50){
    console.log("less than 50");//now only this will execute bcz condition is true
}
else{
    console.log("temperature is greater than 50");//if condition is false than else part will execute
}
console.log("executed");//this will also execute whether the condition is true or false

// <, >, <=, >=, ==, !=, ===, !==

const score = 200

if(score > 100){
    const power = "fly"
    // var power = "fly"
    console.log(`User power: ${power}`);//User power: fly
}
// console.log(`User power: ${power}`);//power is not defined bcz it is out of scope
// if i make it var than it is accessible and output is the same //User power: fly

// shorthand notation
//implicit scope
const balance = 1000

if(balance > 500) console.log("test");//test
// if(balance > 500) console.log("test"), console.log("test2");//test  test2 //to execute multiple code but recommended not use

// if(balance < 500){
//     console.log("less than 500");
// }
// else if(balance < 750){
//     console.log("less than 750")
// }
// else if(balance < 900){
//     console.log("less than 900");
// }
// else{
//     console.log("less than 1200");//this is executed as our balance is 1000
// }

// &&(AND) - all conditions must be true
// ||(OR) - atleast one condition must be true
// !(NOT) - reverse the output

// const isUserloggedIn = true//already declared
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(isUserloggedIn && debitCard){
    console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in")
}
