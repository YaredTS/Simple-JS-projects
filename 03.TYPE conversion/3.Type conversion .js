// type conversion = change the dayatype of a value to another
//                                  (string,numbers,booleans)

// why?  when we accept user input the data type of that input is a string 
// if we need it for any sort of math we need it to covert to a number

let age = window.prompt("How old are you");
age = Number(age)  // this is number function convert data types to number
age += 1;
console.log(age, typeof age);

// Number(),String(),Boolean()