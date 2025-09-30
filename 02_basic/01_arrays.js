const arr = [0, 1, 2, 3, 4, 5];
const myHeros = ["spiderman", "thor", "ironman"];

const arr2 = new Array(1, 2, 3, 4, 5);
console.log(arr2[1]);

// Array Methods
arr.push(6); //add at last
arr.push(7);
arr.pop();

arr.unshift(9); //add at first

arr.shift(); //remove from first
console.log(arr.includes(9)); //false
console.log(arr.indexOf(3)); //3
console.log(arr);

arr.splice(2, 3); //start index, how many to remove
arr.splice(2, 3, 10, 11, 12); //start index, how many to remove, elements to add

// const newArr = arr.join("_");
// console.log(newArr);

console.log("A" , arr)

const newArr = arr.slice(1, 3); //start index, end index
console.log(newArr);
console.log("B" , arr)

const newArr2 = arr.splice(1, 3); //start index, end index
console.log(newArr2);
console.log("c" , arr)