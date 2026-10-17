// for loop

// syntax
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for(let i=0;i<=10;i++){
    const element = i;
    console.log(element);
}
// console.log(element);//error not accessible here

for(let i=0;i<=10;i++){
    const element = i;
    if(element == 5){
        console.log("5 is best number");
    }
    console.log(element);
}

for(let i=0;i<=10;i++){
    console.log(`Outer loop value: ${i}`);
    for(let j=0;j<=10;j++){
        // console.log(`Inner loop value: ${j} and Inner loop value ${i}`);
        console.log(i + '*' + j + '=' + i*j);
    }
}

let myArray = ["Apple","Mango","Orange"]
console.log(myArray.length);
for(let i=0;i<myArray.length;i++){
// for(let i=0;i<=myArray.length;i++){ //undefined
    const element = myArray[i];
    console.log(element);
}

// break and continue

for(let i=1;i<=20;i++){
    if(i == 5){
        console.log(`Detected 5`);
        break;//to break the flow
    }
    console.log(`value of i is ${i}`);
}
for(let i=1;i<=20;i++){
    if(i == 5){
        console.log(`Detected 5`);
        continue;//skip only 5 and than continue
    }
    console.log(`value of i is ${i}`);
}
