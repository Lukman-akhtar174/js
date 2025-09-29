let score = "33";

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);//convert string to number
console.log(valueInNumber);
console.log(typeof valueInNumber);


let numSting = "33abc";

console.log(typeof numSting);
console.log(typeof(numSting));

let valueInum = Number(numSting);//convert string to number
console.log(valueInum);//NaN: Not a Number
console.log(typeof valueInum);

let num = null;

console.log(typeof num);
console.log(typeof(num));

let valueInNum = Number(num);//convert string to number
console.log(valueInNum);//0
console.log(typeof valueInNum);

let marks = undefined;

console.log(typeof marks);
console.log(typeof(marks));

let valueInMarks = Number(marks);//convert string to number
console.log(valueInMarks);//NaN: Not a Number
console.log(typeof valueInMarks);
