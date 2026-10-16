//singleton -object created from constructor
//object.create

const mySym = Symbol("key1")

//object literals
const JsUser = {
    name : "kangna",
    "full name" : "kangna samani",
    // mySym : "mykey1",
    [mySym] : "mykey1",//correct sequence
    age : 20,
    location : "Ahemdabad",
    email : "kangna@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
// console.log(JsUser."full name")//this will give error
console.log(JsUser["full name"])//we have to write this
console.log(JsUser.mySym)

JsUser.email = "kangna@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "kangna@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);//when we have to reference same object
}

console.log(JsUser.greeting);//undefined
// console.log(JsUser.greeting());//we get error bcz our object is freeze we have to unfreeze it

console.log(JsUser.greeting)

console.log(JsUser.greetingTwo());//Hello Js user, kangna