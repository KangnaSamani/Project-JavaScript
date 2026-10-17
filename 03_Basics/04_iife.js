// immediately Invoked Function Expression (IIFE)

// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai()//DB CONNECTED

// to immediately invoke write like this
// named IIFE
(function chai(){
    console.log(`DB CONNECTED`);
})();//DB CONNECTED

// ()()//first paranthesis is for function definition and second paranthesis for execution

// IIFE without name
(() => {
    console.log(`DB CONNECTED TWO`);
})();//DB CONNECTED TWO

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('kangna')//DB CONNECTED TWO kangna