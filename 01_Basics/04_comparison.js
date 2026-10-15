console.log(2 > 1);//true
console.log(2 >= 1);//true
console.log(2 < 1);//false
console.log(2 <= 1);//false
console.log(2 == 1);//false
console.log(2 != 1);//true

console.log("2" > 1);//true
console.log("02" > 1);//true

console.log(null > 0);//false
console.log(null == 0);//false
console.log(null >= 0);//true 
// The reason is that an equality check == and comparisons >, <, >=, <= work differently.
// Comparison convert null to a number, treating it as 0. That's why null >= 0 is true and null == 0 is false.

console.log(undefined > 0);//false
console.log(undefined > 0);//false
console.log(undefined > 0);//false

// == compares two values after converting them to a common type (type coercion), while
// === compares both the value and the data type without conversion.

console.log("2" == 2);//true
console.log("2" === 2);//false