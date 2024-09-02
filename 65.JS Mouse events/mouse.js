// eventListener = Listen for specific events to create interactive web pages
//                events: clicks , mouseover, mouseout
//                .addEventListener(event, callback); 






//--------------------CLICK event

// const myBox = document.getElementById("myBox");


// function changeColor(event){
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "OUCH! 🤕";
// }
// event is an object it's provided to us automatically by 
// the web browser when some thing happens when event occurs
// event is object that contains information about something
// that happens

// myBox.addEventListener("click",changeColor);





// ----------OR instead of passing call back we will
// pass in anonymous function


// myBox.addEventListener("click",function(event){
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "OUCH! 🤕";
// });


//------------OR we can use arrow function 
// prefered one because they are concice with their syntax

// myBox.addEventListener("click",event =>{
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "OUCH! 🤕";
// });


//Note: if you have single parameter you don't need to enclose
// it within a set of parenteses






// --------------------MOUSE OVER
// is when u hover your cursor over something
// An element can have more than one event listener

// myBox.addEventListener("mouseover",event =>{
//         event.target.style.backgroundColor = "yellow";
//     event.target.textContent = "Don't do it 🤨";
// })


// ------------------------MOUSEO OUT
// when you leave specified element 

// myBox.addEventListener("mouseout",event =>{
//     event.target.style.backgroundColor = "lightgreen";
// event.target.textContent = "Click Me 😊";
// })





// -------------When we add button

const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

myButton.addEventListener("click",event =>{
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "OUCH! 🤕";
});

myButton.addEventListener("mouseover",event =>{
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "Don't do it 🤨";
})

myButton.addEventListener("mouseout",event =>{
    myBox.style.backgroundColor = "lightgreen";
    myBox.textContent = "Click Me 😊";
})