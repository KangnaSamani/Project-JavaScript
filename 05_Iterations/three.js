// for of

// ["", "", ""]
// [{}, {}, {}]//objects declared inside an array

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);
}

const greetings = "Hello world!"
for(const greet of greetings){
    console.log(`Each char is ${greet}`);
}

//Maps
//The Map object holds key-value pairs and remembers the original insertion order of keys.
//Any value(both objects and primitive values) may be used as either a key or a value.
//key in the Map may only occur once; it is unique in the Map's collection

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
console.log(map);
// Map(3) {
//   'IN' => 'India',
//   'USA' => 'United States of America',
//   'Fr' => 'France'
// }

map.set('IN', "India")
console.log(map);
// Map(3) {
//   'IN' => 'India',
//   'USA' => 'United States of America',
//   'Fr' => 'France'
// }

for(const key of map){
    console.log(key);
}
// [ 'IN', 'India' ]
// [ 'USA', 'United States of America' ]
// [ 'Fr', 'France' ]

for(const [key, value] of map){
    console.log(key, ':-', value);
}
// IN :- India
// USA :- United States of America
// Fr :- France

const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

// for(const [key, value] of myObject){
//     console.log(key, ':-', value);//myObject is not iterable
// }