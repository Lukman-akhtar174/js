const name = "lukman";
const repoCount = 50;

// console.log(name+" "+repoCount+" "  + "value");


console.log(`Hello ${name} you have ${repoCount} repo`);//template string


const gameName = new String("Kashif-Malik");
console.log(gameName.split('-'));

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);

console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());

console.log(gameName.slice(0,5));
console.log(gameName.slice(5));

console.log(gameName.substring(0,4));
console.log(gameName.substring(4));

console.log(gameName.charAt(2));
console.log(gameName.indexOf("M"));

const newString = "    Hello World    ";

console.log(newString);
console.log(newString.trim());
console.log(newString.trimStart());
console.log(newString.trimEnd());

const url = 'https://lukman.com/lukman%20malik';

console.log(url.replace('%20','-'));