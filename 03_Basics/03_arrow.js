const user = {
    username: "kangna",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        //console.log(this);  // kangna , welcome to website
                            // {
                            //     username: 'kangna',
                            //     price: 999,
                            //     welcomeMessage: [Function: welcomeMessage]
                            // }
                            // hello , welcome to website
                            // {
                            //     username: 'hello',
                            //     price: 999,
                            //     welcomeMessage: [Function: welcomeMessage]
                            // }
    }
}

user.welcomeMessage//no output
user.welcomeMessage()//we have to () bcz it is a method //kangna , welcome to website
user.username = "hello"
user.welcomeMessage()//kangna , welcome to website

console.log(this);//{}

// The => symbol is used to create an arrow function. It provides a shorter way to write a function.
// The this keyword is used to refer to an object associated with the current function call.

// function chai(){
//     let username = "kangna"
//     console.log(this.username);//undefined//this is used in objects not functions
// }
// chai()

// const chai = function(){
//     let username = "kangna"
//     console.log(this.username);//undefined
// }
// chai()

const chai = () => {//for arrow function only remove the function keyword and => after paranthesis
    let username = "kangna"
    console.log(this.username);//undefined
    console.log(this);//{}
}
chai()

//arrow function syntax
// () => {}

// const addTwo = (num1, num2) => { //in curly braces we need to write return keyword
//     return num1 + num2
// }
// console.log(addTwo(3, 4));//7

//another way - Implicit return 
// const addTwo = (num1, num2) => num1 + num2 //no need to write return keyword
// console.log(addTwo(3, 4));//7

// const addTwo = (num1, num2) => (num1 + num2) //in paranthesis no need to write return keyword
// console.log(addTwo(3, 4));//7

// const addTwo = (num1, num2) => {username: "kangna"}//undefined bcz we need to write in () paranthesis 
const addTwo = (num1, num2) => ({username: "kangna"})//{ username: 'kangna' }
console.log(addTwo(3, 4))