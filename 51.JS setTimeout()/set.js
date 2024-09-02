// setTimeout() = function in javascript allow you to schedule
//       the execution of a function after an amout of time(milliseconds)
//       Times are approximate (varies based on the workload of the Javascript runtime env.)

//         setTimeout(callback,delay);

// ------------callback
// function sayHello(){
//     window.alert("Hello");
// }

// setTimeout(sayHello,3000);

// -------Instead of call black we'll use an anonymous function

// setTimeout(function(){window.alert("Hello")},3000);

//------- or even arrow function

// setTimeout(() => window.alert("Hello"),5000 );


// --------clearTimeout(timeoutId) = can cancel a timeout before it triggers

// const timeoutId = setTimeout(() => window.alert("Hello"),3000);

// clearTimeout(timeoutId);


//---------create button in html onclick to display hello

let timeoutId;

 function startTimer(){
     timeoutId =setTimeout(() => window.alert("Hello"),3000);
     console.log("STARTER");
 }

 function clearTimer(){
    clearTimeout(timeoutId);
    console.log("CLEARED");
 }