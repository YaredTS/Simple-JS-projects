// While loop = repeat some code WHILE some condition is true


// let username = "";

// while(username === "" || username === null){
//     username = window.prompt(`Enter your name`);  // while loop will keep repeating until the condition is no longer true
// }

// console.log(`Hello ${username}`);


 // Another variation of while loop called 
 // Do while loop 
 // you can move while and the condition to the end

//  let username; // during the dowhile loop it is not neccessy to set the username 

//  do{
//     username = window.prompt(`Enter your name`); // do the code first and the condition 
//  } while(username === "" || username === null)

// console.log(`Hello ${username}`);




// Another example

// let loggedIn = false;
// let username;
// let password;
// while(!loggedIn){  //while not logged in do all of this
//     username = window.prompt(`Enter your username`);
//     password = window.prompt(`Enter your password`);

//     if ( username === "myUsername" && password === "myPassword"){
//         loggedIn = true;
//         console.log ("You are logged in!");
//     }else {
//         console.log ("Invalid credentials! Please try again");
//     }
// }


// with do while loop

let loggedIn = true;
let username;
let password;
do{
    username = window.prompt(`Enter your username`);
    password = window.prompt(`Enter your password`);

    if ( username === "myUsername" && password === "myPassword"){
        loggedIn = true;
        console.log ("You are logged in!");
    }else {
        console.log ("Invalid credentials! Please try again");
    }
}while(!loggedIn)
   



// Repeat some code while some condition is true 
//while some condition is true execute this code
//forever until this is no longer true