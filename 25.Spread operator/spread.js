// spread operator =  represented by three dots   ...
//                    allows an iterable such as an array or String
//                    to be expanded into seperate elements
//                    (unpacks the elements)

let numbers = [1,2,3,4,5];
// what if you need to find the greatest value


// let maximum = Math.max(numbers); // result NaN 

// using the max method we can't place an array directly within this method
// However by utilizing spread operator we can spread this array
// into different elements

// let maximum = Math.max(...numbers);
// let minimum = Math.min(...numbers);
// console.log(maximum);
// console.log(minimum);



// you can do this with strings too
// seperate string in to different characters

let username = "Yared Tesfaye";
let letters = [...username];
let page = [...username].join("-");
console.log(letters);
console.log(page);

// array of fruits 
let fruits = ["apple","orange","banana"];
let vegetable = ["carrots","celery","potatoes"];
// i can create a shallow copy of this arary using spread operator
// shallow copy means its different data structure but 
// it contain identical values
let newFruits = [...fruits];
// we have  two different arrays who have same identical elements 
// we can combine two or more array using spread operators
let foods = [...fruits,...vegetable,"eggs","milk"];
 
console.log(fruits);
console.log(newFruits);
console.log(foods);
