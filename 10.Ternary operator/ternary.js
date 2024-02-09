// ternary operator = a shortcut to if{} and else{} statements
//                   helps to assign a variable base on a condition 
//                   condition ? codeIfTrue : codeIfFalse;


// let age = 21;
// let message = age >= 18 ? "You're an adult" : "You're a minor";

// console.log (message);

// let time = 16;
// let greeting = time < 12 ? "Good morning!" : "Good afternoon!";
// console.log (greeting);

// let isStudent = true;
// let message = isStudent ? "You are a student" : "You are NOT a student";
// console.log(message);

let purchaseamount = 125;
let discount = purchaseamount >= 100 ? 10 : 0;
console.log (`Your total is $${purchaseamount - purchaseamount *(discount/100) }`) // $ sign for our unit of currency then i need another $ sign for placeholder