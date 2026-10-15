const name = "kangna"
const repoCount = 50
// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const Name = new String('kangna samani')
console.log(Name[0]);
console.log(Name.__proto__);

console.log(Name.length);//13
console.log(Name.toUpperCase());
console.log(Name.toLowerCase());
console.log(Name.charAt(3));//g
console.log(Name.indexOf('s'));//7
console.log(Name.substring(0,6));//kangna
console.log(Name.trim());
// const string=Name.slice(-8, 4);
// console.log(string);

const url = "https://kangna.com/kangna%30samani"
console.log(url.replace('%30','_'));

console.log(url.includes('kangna'));

console.log(Name.split('-'));