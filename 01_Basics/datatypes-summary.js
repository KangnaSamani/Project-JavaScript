// Premitive DataTypes
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.5
const isLoggedIn = false
const name = "kangna"
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);//false

const bigNumber = 345557771245679n

console.log(typeof bigNumber);//bigInt
console.log(typeof outsideTemp);//object //we have assigned null datatype to outsideTemp and javascript treats null as object
console.log(typeof anotherId);//symbol

// Non Premetive(Reference) DataTypes
// Array, Objects, Functions

const Fruits = ["Apple" , "Mango" , "Orange"];

let myObj = {
    name: "kangna",
    age: 20
}

const myFunction = function(){
    console.log("Hello world");
}

// ----------------------------------------------------------------------------------------------
// Stack (Primitive), Heap (Non-Prmetive)

let myYoutubename = "kangna"

let anothername = myYoutubename
anothername = "coder"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "kangna@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "kangna@google.com"

console.log(userOne.email);
console.log(userTwo.email);