//singlton 
//object.create

//object literal

const mySym = Symbol('key1');

const user = {
    name: "Lukman",
    "full name": "Lukman Akhtar",
    [mySym]: "mykey1",
    age: 23,
    email: "lukman@google.com",
    location: "Lucknow",
    blogs: ["why mac & cheese rules", "10 things to make with marmite"],
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Friday"]
}

console.log(user.age);
console.log(user["name"]);
console.log(user["full name"]);
console.log(user[mySym]);

user.age = 30;
console.log(user.age);

