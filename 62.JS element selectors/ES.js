// element selectors = Methods used to target and manipulate HTML elements
//                   They allow you to select one or multiple HTML elements
//                   from the DOM (document object model)


// 1. document.getElementById()           // ELEMENT OR NULL
// 2. document.getElementsClassName()     // HTML COLLECTION
// 3. document.getElementsByTagName()     // HTML COLLECTION
// 4. document.querySelector()            // ELEMENT OR NULL
// 5. document.querySelectorAll()         // NODELIST

// write reference
// const myHeading = document.getElementById("my-heading");
// know i can access this h1 element using this myheading reference

// myHeading.style.backgroundColor = "yellow";

// in css properties in javascript if you are accessing them through
// the DOM they have a camelcase naming convention but
// if you accessing these properties with css they have a hyphenated
// naming convention
// console.log(myHeading); // this will display the html element





//--------------document.getElementsByClassName

// will return an html collection of all matching elements that share
// this class

// if you would like to use array method with this html collection
// you would want it to type cast it to an array

// const fruits = document.getElementsByClassName("fruits");
// console.log(fruits);
// fruits[0].style.backgroundColor = "red";
// if i want to iterate over all of these elements we will use enhanced for loop
// for(fruit of fruits){
//     fruit.style.backgroundColor = "blue";
// }
// HTML collections don't have a builtin foreach method
// fruits.forEach(); // is not function
// so what we can do is type cast our HTML collection as an array

// Array.from(fruits).forEach(fruit =>{
//     fruit.style.backgroundColor = "yellow";
// }); // this will return a new arraw of fruits






// ---------------document.getElementsByTagName()

// const h4Elements = document.getElementsByTagName("h4");
// const liElements = document.getElementsByTagName("li");

// console.log(h4Elements);
// we can access individual element of this html collection by
// an index by taking the reference h4Elements

// h4Elements[0].style.backgroundColor = "Red";// highlights root vegetable
// h4Elements[1].style.backgroundColor = "Red";// highlights non-root vegetable\

// To apply css property to all of the element
// we can use an enhanced for loop

// for(h4Element of h4Elements){
//     h4Element.style.backgroundColor = "yellow";
// }
// for (liElement of liElements){
//     liElement.style.backgroundColor = "lightgreen";
// }

// since these are html collections and not arrays they don't
// have any array methods but we can type cast them so they do

// Array.from(h4Elements).forEach(h4Element =>{
//     h4Element.style.backgroundColor = "yellow";
// });

// Array.from(liElements).forEach(liElement =>{
//     liElement.style.backgroundColor = "lightgreen";
// });








//-------------- document.querySelector()
// first macthing element
// only return single element



// const element = document.querySelector(".fruits");

// element.style.backgroundColor = "yellow";










//-------------------document.querySelectorAll()

// This returns nodelist
// A node list is similar to an html collection except it has
// built in methods similar to arrays
// however nodelist are static /html collection are live

// NodeList is static - snapshot of matches / doesn't update
// HTMLCollection is live - automatically reflects DOM changes



const foods = document.querySelectorAll("li");

console.log(foods);

// Nodelist have built-in foreach method
// means we don't have to type cast it into an array

foods.forEach(food => {
    food.style.backgroundColor = "yellow";
})


// personal preference i use getElementById and querySelectoAll














































// element selectors = Methods used to target and manipulate HTML elements
//                                     They allow you to select one or multiple HTML elements
//                                     from the DOM (Document Object Model)

// 1. document.getElementById()                 // ELEMENT OR NULL
// 2. document.getElementsClassName()  // HTML COLLECTION
// 3. document.getElementsByTagName() // HTML COLLECTION
// 4. document.querySelector()                    // FIRST ELEMENT OR NULL
// 5. document.querySelectorAll()               // NODELIST

// ---------- getElementById() ----------

// const myHeading = document.getElementById("my-heading");
// myHeading.style.backgroundColor = "yellow";
// myHeading.style.textAlign = "center";

// // ---------- getElementsByClassName() ----------

// const fruits = document.getElementsByClassName("fruits");

// Array.from(fruits).forEach(fruit => {
//     fruit.style.backgroundColor = "yellow";
// });

// // ---------- getElementsByTagName() ----------

// const h4Elements = document.getElementsByTagName("h4");
// const liElements = document.getElementsByTagName("li");

// Array.from(h4Elements).forEach(h4Element => {
//     h4Element.style.backgroundColor = "yellow";
// });

// Array.from(liElements).forEach(liElement => {
//     liElement.style.backgroundColor = "lightgreen";
// });

// // ---------- querySelector() ----------

// const element = document.querySelector("li");

// element.style.backgroundColor = "yellow";

// // ---------- querySelectorAll() ----------

// const foods = document.querySelectorAll("li");

// foods.forEach(food => {
//     food.style.backgroundColor = "yellow"
// });
