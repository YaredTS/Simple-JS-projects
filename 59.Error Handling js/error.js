// Error = An object that is created to represent a problem that occurs
//        Occurs often with user input or establishing a connection

// solution to error is to handle them when they occur
// we can do that with try ,catch, and finally block


// try { } = Encloses code that might potentially cause an error
// catch { } = Catch and handle any thrown Errors from try { }
// finally{ } = (optional) Always executes. used mostly for cean up
//           ex. close files, close connections, release resources



// try{
//     console.log(x);
//     // NETWORK ERRORS
//     // PROMISE REJECTION
//     // SECURITY ERRORS
// }
// catch(error){
//     console.error(error);
// }
// finally{
//     // CLOSE FILES
//     // CLOSE CONNECTIONS
//     // RELEASE RESOURCES
//     console.log("This always executes");
// }

// console.log("You have reached the end!");






// ERRORS  can also occur when accepting user input

// const dividend = window.prompt("Enter a dividend: ");
// const divisor = window.prompt("Enter a divisor: ");

// const result = dividend / divisor;
// console.log(result);
// we can't divide a number by zero so if user input does this it
// would be consider dangerous since person can cause error intensionally 

//so we can handle it by......

try{
    const dividend = window.prompt("Enter a dividend: ");
    const divisor = window.prompt("Enter a divisor: ");

    if(divisor ==0){
        throw new Error("You can't divide by zero!");
    }
    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("Values must be a number");
    }
    
    const result = dividend / divisor;
    console.log(result);  
}
catch(error){
    console.error(error);
}

console.log("You have reached the end!");

