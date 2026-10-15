// Dates

let myDate = new Date()
console.log(myDate.toString());//Thu Oct 15 2026 17:20:50 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleDateString());//10/15/2026
console.log(myDate.toLocaleDateString());//10/15/2026
console.log(typeof myDate);//object

let myCreateDate = new Date(2023, 0, 23)
let myCreateDate2 = new Date(2023, 0, 23, 5, 3)
let myCreateDate3 = new Date("2023-01-14")
let myCreateDate4 = new Date("01-14-2023")
console.log(myCreateDate.toLocaleString());
console.log(myCreateDate2.toLocaleString());
console.log(myCreateDate3.toLocaleString());
console.log(myCreateDate4.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreateDate3.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);//2026-10-15T11:59:45.540Z
console.log(newDate.getMonth() + 1);//10
console.log(newDate.getDay());//4

// `${newDate.getDay()} and the time
newDate.toLocaleString('default', {
    weekday: "long"
})