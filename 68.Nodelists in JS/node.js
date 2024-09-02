// NodeList = Static collection of HTML elements by (id, class, element)
//                     Can be created by using querySelectorAll()
//                     Similar to an array, but no (map, filter, reduce) 
//                     NodeList won't update to automatically reflect changes



// let buttons = document.querySelectorAll(".myButtons");
// we could select elements by an element type 
// if i would like to select all buttons i would type in = button - the element type

// console.log(buttons);


//---------Here is what we can chage the html and css
//-----ADD HTML/CSS PROPERTIES
// let buttons = document.querySelectorAll(".myButtons");
// buttons.forEach(button =>{
//     button.style.backgroundColor = "green";
//     button.textContent += "😁";
// }); // this should update all the colors
// we are iterating through all of the button with in the nodelist




// ---- We will add eventlistener to each button that will listen
// for a click
//-----------CLICK event listener

// let buttons = document.querySelectorAll(".myButtons");

// buttons.forEach(button =>{
//     button.addEventListener("click", event =>{
//         event.target.style.backgroundColor = "tomato";
//     });
// });



//------------MOUSEOVER + MOUSEOUT event listener

// let buttons = document.querySelectorAll(".myButtons");

// buttons.forEach(button =>{
//     button.addEventListener("mouseover",event =>{
//         event.target.style.backgroundColor = "hsl(205, 100%, 40%)";
//     })
// })
// buttons.forEach(button =>{
//     button.addEventListener("mouseout",event =>{
//         event.target.style.backgroundColor = "hsl(205, 100%, 60%)";
//     })
// })


//--------------How to add element to nodelist

// let buttons = document.querySelectorAll(".myButtons");


// so with creating and appending html elements there's three steps
//  STEP 1 -create that element
// const newButton = document.createElement("button");
// STEP 2 - add any necessery attribute or css properties
// newButton.textContent = "Button 5";
// newButton.classList = "myButtons";
// STEP 3 - append this element to the DOM
// document.body.appendChild(newButton);

// console.log(buttons); 
//we will have 5 button on our DOM but in our nodelist we have 4
// because node list are static collection they won't update 
// automatically to reflect changes to the dom even though 
// button 5 is within the DOM
//  we need to manually add it to our nodelist if we want to work with it
//  to do that we can use queryselector
//  let's reassign button since we declare it by let

// buttons = document.querySelectorAll(".myButtons");
// console.log(buttons);


// ------------How to remove an element from nodelist when u click button



let buttons = document.querySelectorAll(".myButtons");

buttons.forEach(button=>{
    button.addEventListener("click",event =>{
        event.target.remove();
        // console.log(buttons);
        // even if i were to remove these buttons from the dom
        // they're still within the node list 
        // so we have to update that manually
        buttons = document.querySelectorAll(".myButtons");
    })
})