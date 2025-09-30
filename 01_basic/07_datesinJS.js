let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());

// console.log(myDate.toLocaleDateString());

let myCreatedDate = new Date(2005, 7, 5, 12, 30, 45, 0);
console.log(myCreatedDate.toLocaleString());

let myCreatedDate2 = new Date("08-05-2005");
console.log(myCreatedDate2.toLocaleString());

let myTimestamp = Date.now();
// console.log(myTimestamp);
// console.log(myCreatedDate2.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getFullYear());
console.log(newDate.getMonth() + 1); // 0-11
console.log(newDate.getDate());
console.log(newDate.getDay()); // 0-6

// `${newDate.getDay()}`