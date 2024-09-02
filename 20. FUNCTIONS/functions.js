//  !function = A section of reusable code.
//  !       Declare code once , use it whenever you want 
//  !       Call the function to execute the code.

// function happyBirthday(){
//     console.log("Happy birthday to you!");
//     console.log("Happy birthday to you!");
//     console.log("Happy birthday dear you!");
//     console.log("Happy birthday to you!");
// }

// happyBirthday();



// You can send function some values or variables

// function happyBirthday(username,age){
//     console.log("Happy birthday to you!");
//     console.log("Happy birthday to you!");
//     console.log(`Happy birthday dear ${username} you!`);
//     console.log("Happy birthday to you!");
//     console.log(`You are ${age} years old`);
// }

// happyBirthday("yared",26); // it is known as arguments their data you send to a function but
// you need a matching set of parameters within the parentheses of the declaration
// happyBirthday("Betteye",24);
// happyBirthday("kala",23);




// Return keyword

// function add(x,y){
//     let result = x + y;
//     return result;
// }

// let answer = add(2,3); // when u return something from 
// a function after you resolve the function it became the result
// like the value of x+y which is 5
// console.log(answer);

//OR

// function add(x,y){
//     let result = x + y;
//     return result;
// }

// console.log(add(2,3));
//OR

// function add(x,y){
//      return x + y; // subtract,multiply,divide
// }
// to determine if the numbers is even or odd
// function isEven(number){
//     if(number % 2 === 0){
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// console.log(isEven(14));


// or you can use trinary operator

// function isEven(number){

//     return number % 2 === 0 ? true : false;
// }console.log(isEven(14));


// Example
function isValidEmail(email){

    // if (email.includes("@")){
    //     return true;
    // }else {
    //     return false;
    // }

    return email.includes("@") ? true : false ;
}
console.log(isValidEmail("Yaredtesfaye94@gmail.com"))



    
