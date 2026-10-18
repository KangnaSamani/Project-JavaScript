const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach(function (val){
//     console.log(val);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCodding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCodding.forEach((item) => {
    console.log(item.languageName);//javascript java python
})