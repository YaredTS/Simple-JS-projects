// Date objects = objects that contain values that represent dates 
//                and times.
//         These date objects can be changed and formatted



// const date = new Date();

// console.log(date);// gives us current time and date



// -------------to create your own custom date and time object
// Date(year, month, day, hour, minute, second,)

// const date = new Date(2024, 0, 1, 2, 3, 4, 5);

// console.log(date);

//-----------also passing in string reprsentatin of time to date
// constructor is valid

// const date = new Date("2024-01-02T12:00:00Z");

// console.log(date);

// ---------you can extract individual values from a date object

const date = new Date();

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const dayOfWeek = date.getDay();;


console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(dayOfWeek);

// -------with date object we can set the date with method

const date = new Date();

date.setFullYear(2024);
date.setMonth(0);
date.setDate(1);
date.setHours(2);
date.setMinutes(3);


console.log(date);

// -----------we can even compare dates

const date1 = new Date("2023-12-31");
const date2 = new Date("2024-01-01");

if(date2 > date1){
    console.log("HAPPY NEW YEAR!");
}
