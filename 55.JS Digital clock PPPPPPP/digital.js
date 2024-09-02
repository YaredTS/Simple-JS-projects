// function updateClock(){
//     const now = new Date();
//     const hours = now.getHours().toString().padStart(2,0);
// // for the first two characters pad them with zero
//     const minutes = now.getMinutes().toString().padStart(2,0);
//     const seconds = now.getSeconds().toString().padStart(2,0);
//     const timeString = `${hours}:${minutes}:${seconds}`;
//     document.getElementById("clock").textContent = timeString;
// }

// updateClock();
// setInterval(updateClock,1000);
// setinterval works like settimeout except it will call a
// function repeatedly not just once 
// but we need callback which is updateClock call this funciton
// after every 1000 millisecond



//  ---------------if you want your clock to be 12 hour clock



function updateClock(){
    const now = new Date();
    let  hours = now.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
// after our meridium we will reassign hour
    hours = hours.toString().padStart(2,0);
// for the first two characters pad them with zero
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);
    const timeString = `${hours}:${minutes}:${seconds}${meridiem}`;
    document.getElementById("clock").textContent = timeString;
}

updateClock();
setInterval(updateClock,1000);