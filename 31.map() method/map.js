// .map() = accepts a callback and applies that function
//           to each element of an array, then return a new array


// const numbers = [1,2,3,4,5];

// const squares = numbers.map(square);
// console.log(squares)

// function square(element){
//     return Math.pow(element,2)
// }


           // Example 2

// const student = ["Spongebob","Patrick","Squidward","Sandy"];

// const studentsUpper = student.map(upperCase);
// const studentsLower = student.map(lowerCase);

// console.log(studentsUpper);

// function upperCase(element){
//     return element.toUppperCase();
// }

// function lowerCase(element){
//     return element.toLowerCase();
// }




            // Example 3
// certain regions will order their date differently
// Example year,month,day we are going to rearrange it 
const dates = ["2024-1-10","2025-2-20","2026-3-30"]

const formttedDates = dates.map(formatDates);
console.log(formttedDates);

function formatDates(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}


// the map() method is similar to foreach() method  
// the map method accepts callback and applies that function
// to each element of an array however it returns new
// array when it's finished 