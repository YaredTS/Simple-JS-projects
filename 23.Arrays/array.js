// !Arrays = a variable like structure that can hold 
// !                  more than 1 value

let fruits = ["apple", "orange", "banana"];
// add S so the variable name is plural for readiablity

// javascript is going to print out all of the elements 
// in this array each item, each value is known as element
 
// if you need to access an individual element 
// you have to add index number in close and straight brackets[]


// fruits[1] = "coconut"; // u can replace elements
// fruits[3] = "mango"; // or add

// or use built in method of arrays
// fruits.push("avocado");

//  pop() used to remove the last element
// fruits.pop();

// the unshift() method will add element to the beginning of array
// fruits.unshift("potato");

// shift() method to remove element from the beginning of array
// fruits.shift();
 

// console.log(fruits[0]);
// console.log(fruits);

// to find the length of an array there is a length property
// let numOffFruits = fruits.length;

// find index of an element
// let index = fruits.indexOf("orange");

// console.log(numOffFruits);
// console.log(index);


// loop through the elements and display them
// use for loop

// for (let i = 0 ; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

// in reverse
// for (let i = fruits.length-1; i >= 0; i--){
//     console.log(fruits[i]);
// }


fruits.sort(); // to sort array in alphabetical order
fruits.sort().reverse(); // sort them reverse order

 
// there is also enhanced for loop
// its shortcut to displaying the element of array

for (let fruit of fruits  ){
    console.log(fruit);
}

fruits.sort(); // to sort array in alphabetical order
fruits.sort().reverse(); // sort them reverse order

