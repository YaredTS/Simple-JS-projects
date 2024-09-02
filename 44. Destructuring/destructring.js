// destructuring - extract values from arrays and objects.
//               then assign them to variables in a convenirnt way
//              [] = to perform array destructuring
//              {} = to perform object destructuring
//              5 examples


//----------------Example1-----------
// swap the value of two variables

let a = 1;
let b = 2;

[a,b] = [b,a];


console.log(a);
console.log(b);

//--------------Example2----------
// swap 2 elements in an array

// const colors = ["red","green","blue","black","white"];
// // to swap the first element and the last 

// [colors[0],colors[4]]  = [colors[4],colors[0]];

// console.log(colors);

//----------------Example 3 ----------------
// assign array elements to variables
// const colors = ["red","green","blue","black","white"];

// const [firstColor,secondColor,thirdColor,...extracolors] = colors;

// console.log(firstColor);
// console.log(extracolors);

// //---------------------Example4------------
// // extract values from objects

// const person1 = {
//     firstName: "Spongebob",
//     lastName: "SquarePants",
//     age: 30,
//     job: "Fry cook"
// }

// const person2 ={
//     firstName: "Patrick",
//     lastName: "Star",
//     age: 34,
// }

// const {firstName, lastName, age, job = "Unemployed"} = person2;
// // you can set default value when destructuring
// // since person2 don't have job property we will set value for job

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);


//------------------------EXAMPLE 5---------------
//Destructures in function parameters
// we can pass an object to a function and destructre it when it's
// passed in

function displayPerson({firstName, lastName, age, job}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}



const person1 = {
    firstName: "Spongebob",
    lastName: "SquarePants",
    age: 30,
    job: "Fry cook"
}

const person2 ={
    firstName: "Patrick",
    lastName: "Star",
    age: 34,
}

displayPerson(person1);
displayPerson(person2); // you can set default value for job property
// by assigning it in the function parameter