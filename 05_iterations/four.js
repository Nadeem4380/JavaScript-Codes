const coding = ["js", "ruby", "java", "cpp"]

// coding.forEach( function (item) {
//     console.log(item);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileNAme: "js"
    },
    {
        languageName: "java",
        languageFileNAme: "java"
    },
    {
        languageName: "python",
        languageFileNAme: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})