

function printName() {
    console.log("L");
addTwoNumbers(10, 20);    console.log("U");
    console.log("K");
    console.log("M");
    console.log("A");
    console.log("N");
}

// printName();

// function addTwoNumbers(num1, num2) {
//     if (typeof num1 !== 'number' || typeof num2 !== 'number') {
//         console.log("Please provide two numbers");
//         return;
//     }
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2) {
    const result = num1 + num2;
    return result;
    console.log("This line will never be executed");
    
}

const sum = addTwoNumbers(10, 20);
// console.log("Sum is:", sum);

function loginUserMessage(username) {
    if (!username) {
        return "Please provide a username";
    }
    return `hello ${username} logged in successfully`;
}

console.log(loginUserMessage());