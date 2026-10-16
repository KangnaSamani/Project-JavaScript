function sayMyName(){
    console.log("K");
    console.log("A");
    console.log("N");
    console.log("G");
    console.log("N");
    console.log("A");
}

// sayMyName //reference
sayMyName()//execution

// function addTwoNumbers(number1, number2){//give parameters number1 and number2
//     console.log(number1 + number2);
// }

addTwoNumbers()//NaN bcz argument is not given
addTwoNumbers(3, 4)//7
addTwoNumbers(3, "4")//34
addTwoNumbers(3, "a")//3a
addTwoNumbers("3", 4)//34
addTwoNumbers(3, null)//3

// const result = addTwoNumbers(3, 5)//8
// console.log("Result: ", result);//Result:  undefined


// function addTwoNumbers(number1, number2){
//     let result = number1 + number2
//     console.log("kangna")//here it is executed
//     return result
//     console.log("kangna")//any code written after return is not executed and unreachable
// }

// const result = addTwoNumbers(3, 5)//8
// console.log("Result: ", result);//now the output is Result: 8

function addTwoNumbers(number1, number2){
    return number1 + number2
}

const result = addTwoNumbers(3, 5)//8
console.log("Result: ", result);//Result: 8

function loginUserMessage(username){
// function loginUserMessage(username = "hello"){//here default value is given hello so if the value is undefined it will display hello and it will not go in the if condition block.

    if(username === undefined){
    // if(!username){ //it will give same output
    
        console.log("please enter username");
        //output without return
        //please enter username
        //undfined just logged in
        
        //output with return
        //please enter username
        //undefined
        return
    }
    return `${username} just logged in`
}

loginUserMessage("kangna")//execution //no output only executes
console.log(loginUserMessage("kangna"))//kangna just logged in //execute and also print
console.log(loginUserMessage(""))// just logged in
console.log(loginUserMessage())//undefined just logged in
