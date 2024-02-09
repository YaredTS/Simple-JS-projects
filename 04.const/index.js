// const = a variable that can't be changed

const PI = 3.14159;
let radius;
let circumference;

// easy way = window.prompt

//   radius = window.prompt(`Enter the radius of a circle`);
//   radius = Number(radius); // when we always accept user input it is string data type that's why changed it to number

// circumference = 2*pi*radius;
//  console.log(circumference);

// professional way = html textbox

document.getElementById("B1").onclick = function(){
    radius = document.getElementById("I1").value;
    radius = Number(radius);
    circumference = 2*PI*radius;
    document.getElementById("H3").textContent = circumference;
    
}

