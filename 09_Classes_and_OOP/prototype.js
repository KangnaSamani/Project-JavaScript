let myName = "kangna"
let myName2 = "kangna     "

console.log(myName.length);//6
console.log(myName2.length);//11
console.log(myName2.truelength);//undefined
console.log(myName2.trim().length);//6

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.kangna = function(){
    console.log(`kangna is present in all objects`);
}

Array.prototype.heyKangna = function(){
    console.log(`Kangna says hello`);
}

heroPower.kangna()//kangna is present in all objects

myHeros.kangna()//kangna is present in all objects

// heroPower.heyKangna()//TypeError: heroPower.heyKangna is not a function

myHeros.heyKangna()//Kangna says hello

//inheritance

const User = {
    name: "kangna",
    email: "kangna@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fulltime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "hello world!!!     "
String.prototype.truelength = function(){
    console.log(`${this}`);//hello world!!!     
    // console.log(`${this.name}`);//undefined
    console.log(`True length is: ${this.trim().length}`);//True length is: 14
}

anotherUsername.truelength()
"kangna".truelength()//kangna   True length is: 6
"javascript-basics".truelength()//javascript-basics    True length is: 17