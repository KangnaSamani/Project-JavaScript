// syntax
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3

switch (month){
    case 1:
        console.log("January");
        break;//break is usd for termination the further code to run if the condition is true
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");//here this is true than the code is terminated after this
        break;
    case 4:
        console.log("april");
        break;
    default:
        console.log("default case executed");
        break;
}