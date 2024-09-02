// arrow functions   = A concise way to write function expression
//                 good for simple functions that you use only once
//                 (parameters) => some code

// const hello = () => console.log("Hello!");
 
// const hello = (name,age) =>{console.log(`Hello ${name}`) 
//                            console.log(`You are ${age} years old`)};

// hello("Yared",18); 

 

              // Example 2


setTimeout(() => console.log("Hello"),3000);


                 // Example 3


const numbers = [1,2,3,4,5,6];

const  squares = numbers.map((element) => Math.pow(element,2) )

console.log(squares);