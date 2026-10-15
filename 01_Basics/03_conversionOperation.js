let score = "33"
// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);

let score2 = "33ab"
let valueInNumber2 = Number(score2)
// console.log(typeof valueInNumber2);
// console.log(valueInNumber2);
//score2 is converted into number by js but the actual type os NaN(Not a number)

let score3 = null
let valueInNumber3 = Number(score3)
// console.log(typeof valueInNumber3);
// console.log(valueInNumber3);//0

let score4 = undefined
let valueInNumber4 = Number(score4)
// console.log(typeof valueInNumber4);
// console.log(valueInNumber4);//NaN

let score5 = true
let valueInNumber5 = Number(score5)
// console.log(typeof valueInNumber5);
// console.log(valueInNumber5);//1

let name = "kangna"
let valueInNumber6 = Number(name)
// console.log(typeof valueInNumbe6);
// console.log(valueInNumber6);//NaN

//"33" => 33
//"33abc" => NaN
//true => 1; false => 0
//null => 0
//undefied => NaN
//"kangna" => NaN

let isLoggedIn = 1
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

//1 => true; 0 => flase
//"" => false
//"kangna" => true

let someNumber = 53
let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// ------------------------------ Operations -----------------------------

let value = 5
let negValue = -value
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2%3);

let str1 = "hello"
let str2 = "kangna"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);// 12
console.log(1 + "2");// 12
console.log("1" + 2 + 2);// 122
console.log(1 + 2 + "2");// 32
console.log((3 + 4) * 5 % 3);//2

console.log(true);//true
console.log(+true);//1
console.log(+"");//0
console.log(+false);//0

let num1, num2, num3
num1 = num2 = num3 = 2 + 2
console.log(num1, num2, num3);

let gameCounter = 100
++gameCounter;
console.log(gameCounter);
gameCounter++;
console.log(gameCounter);
//a++ - postfix - the increment operator increments and returns the value before incrementing.
//++a - prefix - the increment operator increments and returns the value after incrementing.