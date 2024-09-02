// callback   = a fuction that is passed as an argument 
//               to another function

//               used to handle asynchronous operation:
//                 operation that may take a variable amount of time
//                1. Reading a file
//                2. Network requests 
//                3. Interacting with databases

//               "Hey, when you're done ,call this next."


// function hello(callback) {
//     console.log("Hello!");
//     callback();
// }
// function goodbye() {
//     console.log("Goodbye!");
// }

// function leave() {
//     console.log("Leave");
// }
// function wait() {
//     console.log("wait");
// }


// hello(wait);



            // Another example
// you can pass callbacks as well as other arguments to function


sum(displayPage,1,2);

function sum(callback,x,y){
    let result = x+y;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}

 function displayPage(result){
     document.getElementById("myH1").textContent = result;
}