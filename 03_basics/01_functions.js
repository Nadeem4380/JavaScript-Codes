
function sayMyName(){
console.log("N");
console.log("A");
console.log("D");
console.log("E");
console.log("E");
console.log("M");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1+number2
    return number1+number2
}

const result = addTwoNumbers(3,4)

// console.log("Result: ", result)

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Nadeem"))
console.log(loginUserMessage())