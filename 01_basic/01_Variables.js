const accountId = 12345;
var accountName = "lukman";
let accountEmail = 'lk@google.com';

accountCity = 'Lucknow';
/* Prefer to not use var because of its function scope
   Use let and const because of their block scope */

console.table([accountId, accountName, accountEmail, accountCity]);