// let a = 10
// const b = 20
// var c = 30
var c = 300
let a = 500

if(true){
    let a = 10
    const b = 20
    var c = 30
    d = 40
    console.log("INNER: ", a);//INNER:  10
}

// console.log(a);//error 
// console.log(b);//error
console.log(c);//30
console.log(d);//40
console.log(a);//500

//Nested Scope
function one(){
    const username = "kangna"

    function two(){
        const website = "youtube"
        console.log(username);//kangna
    }
    // console.log(website);//not accessible here

    two()
}

one()

if(true){
    const username = "kangna"
    if(username === "kangna"){
        const website = "youtube"
        console.log(username + website)//kangnayoutube
    }
    // console.log(website)//not accessible here
}

// console.log(username);//not accissible here

// --------------------------Interesting--------------------------------

// addone(5)//we can also write like this
console.log(addone(5))

function addone(num){
    return num + 1
}

// addone(5)

const addTwo = function(num){
    return num + 2
}

addTwo(5)