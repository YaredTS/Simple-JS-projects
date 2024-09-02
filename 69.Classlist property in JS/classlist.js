// classList = Element property in JavaScript used to interact
//             with an element's list of classes (CSS classes)
//             Allows you to make reusable classes for many elements
//             across your webpage.

// add()
// remove()
// toggle(Remove if present, Add if not)
// replace(oldClass, newClass)
// contains() // if an element contain class its true if it doesn't it retrun false








//------------------add()&remove()-------------
const myButton = document.getElementById("myButton");//for all below

// myButton.classList.add("enabled");
// know we have appended the CSS property dynamically to the button

// myButton.classList.remove("enabled"); // to remove class



// myButton.classList.add("hover");

// myButton.addEventListener("mouseover",event =>{
//     event = myButton.classList.add("hover");
//  OR
//     event.target.classList.add("hover");
// })

// myButton.addEventListener("mouseout",event =>{
//      event = myButton.classList.remove("hover");

//     event.target.classList.remove("hover");
// })





//--------------------toggle()------------

// myButton.addEventListener("mouseover",event =>{
//     event.target.classList.toggle("hover");
// })

// myButton.addEventListener("mouseout",event =>{
//     event.target.classList.toggle("hover");
// })


//------------------replace() ----------------



// myButton.classList.add("enabled");
// myButton.addEventListener("mouseover", event =>{
//     event.target.classList.replace("enabled","disabled")
// });
// myButton.addEventListener("mouseout", event =>{
//     event.target.classList.replace("disabled","enabled")
// });



// myButton.classList.add("enabled");
// myButton.addEventListener("click",event =>{
//     event.target.classList.replace("enabled","disabled")
// })



//------------------contains()--------------



myButton.classList.add("enabled");
myButton.addEventListener("click",event =>{
    if(event.target.classList.contains("disabled")){
        event.target.textContent += "🤬";
    }else{
        event.target.classList.replace("enabled","disabled");
    }
});