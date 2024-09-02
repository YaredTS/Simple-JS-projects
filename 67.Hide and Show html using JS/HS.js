

const myButton = document.getElementById("myButton");
const myImage = document.getElementById("myImg");


// myButton.addEventListener("click",event =>{


//     if(myImage.style.display === "none"){
//         myImage.style.display = "block";
//         myButton.textContent = "Hide";
//     }else{
//         myImage.style.display = "none";
//         myButton.textContent = "Show";
//     }

// });
// to reserve the image space we will replace display with visibility

myButton.addEventListener("click",event =>{


    if(myImage.style.visibility === "hidden"){
        myImage.style.visibility = "visible";
        myButton.textContent = "Hide";
    }else{
        myImage.style.visibility = "hidden";
        myButton.textContent = "Show";
    }

});