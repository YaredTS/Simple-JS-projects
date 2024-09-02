// function declaration = define a reusable block of code
//                  that perfoms a specific task

//  function hello(){
//       console.log("Hello");
//  }

// function expression  = a way to define function as
//             values or variables





// with function expression we can assign a function to
// variable or pass it as value to another function.

// const hello = function(){
//     console.log("Hello");
// } 

// hello();
// assigning a function to a variable. To use the function
// that's stored within we have to take our variable name
// and add set of parenthese




// Using js we also have the capability of passing a function
// as a value
// function hello(){
//     console.log("Hello"); // This is function decleration
// }

// setTimeout(hello,3000); // 3000millisecond

// instead of using function declaration we are going 
// to pass function expression as an argument

// setTimeout(function(){
//     console.log("Hello");
// },3000)





                    // Example 
// by using .map(), .filter(), .reduce() method of arrays

// const numbers = [1,2,3,4,5,6];
// const squares = numbers.map(square);

// console.log(squares);

// function square(element){
//     return Math.pow(element,2);    // treation this funcion as value for function expression
// }
// this is function decloration


// lets use function expression

const numbers = [1,2,3,4,5,6];
const squares = numbers.map(function(element){
    return Math.pow(element,2);   
});
const cubes = numbers.map(function(element){
    return Math.pow(element,3);
}
);
const evenNums = numbers.filter(function(element){
    return element % 2 === 0;
})
const oddNums = numbers.filter(function(element){
    return element % 2 !== 0;
})
const total = numbers.reduce(function(accumulator,element){
    return accumulator + element;
})

console.log(squares);
console.log(cubes);
console.log(evenNums);
console.log(oddNums);
console.log(total);


// Instead of using function declaration then passing callback
// we can pass entire function expression as an argument to these 
// methods


// Next topic
// discuss arrow function which shortens this syntax further





// used in 
//1. callbacks in asynchronous operations
//2. higer-order function
//3. closures
//4. Event listeners

// still need discusion