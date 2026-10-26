// console.log(Math.PI);//3.141592653589793
// Math.PI = 5
// console.log(Math.PI);//3.141592653589793    //it does not override bcz it is constant

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor);
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,     //bcz of this properties we cannot change the value we can use this properties to make enumerable
//   configurable: false
// }

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}
console.log(chai);//{ name: 'ginger chai', price: 250, isAvailable: true }
console.log(Object.getOwnPropertyDescriptor(chai));//undefined
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// {
//   value: 'ginger chai',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

Object.defineProperty(chai, 'name', {
    // writable: false,
    // enumerable: false//price : 250      isAvailable : true

    // writable: false,
    enumerable: true//name : ginger chai    price : 250     isAvailable : true
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// {
//   value: 'ginger chai',
//   writable: false,
//   enumerable: false,
//   configurable: true
// }

for (const [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}
// price : 250
// isAvailable : true