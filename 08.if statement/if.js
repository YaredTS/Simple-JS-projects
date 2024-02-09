// if statments = if a condition is true , execute some code
//                       if not ,do something else

// let age = 13;

// if (age >= 18) {
//     console.log("you are old enough to enter this site");
// }
// else {
//     console.log("you must be 18+ to enter this site");
// }

// let isStudent = false;

// if (isStudent){
//     console.log("You are a student!");
// }
// else {
//     console.log("You are NOT a student!");
// }



// Nested if statement

// let age = 25;
// let hasLicense = false;

// if(age >= 18){
//     console.log ("You are old enough to drive");
//     if(hasLicense){
//         console.log ("You have your license!");
//     }else {
//         console.log("You do not have your license yet");
//     }
// }
// else {
//     console.log("You must ve 18+ to have License");
// }

// project 

const I1 = document.getElementById("I1");
const B1 = document.getElementById("B1");
const P1 = document.getElementById("P1");
let age;

B1.onclick = function(){
    age = I1.value;
    age = Number(age);
if(age >= 100){
    P1.textContent = `You are TOO OLD to enter this site`;
}else if(age == 0) {
    P1.textContent = `You can't enter You were just born`;
}
else if(age >= 18) {
    P1.textContent = `You are old enough to enter the site`;
}
 else if(age < 0) {
    P1.textContent = `Your age can't be below 0`;
}else {
     P1.textContent = `You must be 18+ to enter this site`;
}
}
