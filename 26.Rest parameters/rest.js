// rest parameters = (...rest) allow a function work with a variable
//                    number of arguments by bundling them into an array 

//           spread = expands an array into seperate elements 
//             rest = bundles seperate elements into an array

// function operFridge(...foods){
//     console.log(foods);
// }
// // to stick all elements with in an array
// function getFood(...foods){
//     return foods;
// }

// const food1 = "pizza";
// const food2 = "hamburger";
// const food3 = "hotdog";
// const food4 = "sushi";

// // operFridge(food1,food2,food3,food4);
// const foods = getFood(food1,food2,food3,food4);
// console.log(foods);

// Example / create a method to sum a bunch of numbers together

function sum(...numbers){ // use rest parameter to accept any number of argument  
    let result= 0;
    // create inhanced for loop to iterate over our array
    for(let number of numbers){
        result += number;
    }
    return result;
}

// create function that calculate the average
function getAverage(...numbers){ 
    let result= 0;
    for(let number of numbers){
        result += number;
    }
    return result / numbers.length;
}


const total = getAverage(75,100,85,90,50);
console.log(total);

// const total = sum(1,2,3,4);
// console.log(`Your total is $${total}`);




// Example 3
// you can use the rest parameters to combine strings together

function combineStrings(...strings){
    return strings.join(" ");
}

const fullName = combineStrings("Mr", "Yared", "Tesfaye","|||")

console.log(fullName);
