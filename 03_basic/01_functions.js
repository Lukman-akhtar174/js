

function printName() {
    console.log("L");
    console.log("U");
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

// console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...prices) {
    return prices 
}

// console.log(calculateCartPrice(200, 300, 400, 500));

const user = {
    username: "Lukman",
    price: 500,
}

function handleObject(obj) {
    console.log(`Username is ${obj.username} and price is ${obj.price}`);
}

handleObject({  username: "Ali", price: 1000});

const myNewarray = [200, 300, 400, 500];

function handleArray(arr) {
    return arr[2]
}
console.log(handleArray(myNewarray));
