// while loop

// syntax
// while (condition) {
    
// }

let i=0
while(i<=10){
    console.log(`Value of index is ${i}`);
    i=i+2
}

let myArray = ["Apple","Mango","Orange"]
let arr = 0
while(arr<myArray.length){
    console.log(`Value is ${myArray[arr]}`);
    arr=arr+1 //or arr++
}

// do-while loop

// syntax
// do {
    
// } while (condition);

let score = 1
do{
    console.log(`Score is ${score}`);
    score++
}while(score<=10);

let score2 = 11
do{
    console.log(`Score is ${score}`);
    score++
}while(score<=10);

// while loop first check the condition and if it is true than start executing
// do-while loop first executes the code once whether it is true or false
// once it is executed than the condition is checked and if it is true it will further executes the code
// and if it false it will not execute further