//  JSON = (JavaScript Object Notation) data-interchange format 
//   Used for exchanging data between a server and a web application



// They can have different format 
// as an object key and value pair
// or as array of values
// or combination of both you can have object where one of the
// value is an array
// or as arrays of object
//   JSON files {key:value} OR [value1, value2, value3]
//                        OR [{}, {}, {}]

// JSON.stringify() = converts a JS object to a JSON string.
// JSON.parse() = converts a JSON string to a JS object




// -------------JSON.stringify()
// JSON formats they are one long string to represent that object 
// or an array

// const names = ["Spongebob", "Patrick", "Squidward", "Sandy"]
// const person = {
//     "name": "Spongebob",
//     "age": 30,
//     "isEmployed": true,
//     "hobbies": ["Jellyfishing", "Karate", "Cooking"]
// }
// const people = [{
//     "name": "Spongebob",
//     "age": 30,
//     "isEmployed": true
// },{
//     "name": "Patrick",
//     "age": 34,
//     "isEmployed": false
// },{
//     "name": "Squideward",
//     "age": 50,
//     "isEmployed": true
// },{
//     "name": "Sandy",
//     "age": 27,
//     "isEmployed": false   
// }]
// we will convert it to a json string
// JSON. is a built in method
// const jsonString = JSON.stringify(people);

// console.log(jsonString);







// ------------------lets convert them to js format
// to convert these objects and arrays into string we will surround 
// them with a pair of backticks




// const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`
// const jsonPerson = `{"name": "Spongebob","age": 30,"isEmployed": true,"hobbies": ["Jellyfishing", "Karate", "Cooking"]}`
// const jsonPeople = `[{"name": "Spongebob","age": 30,"isEmployed": true},
//                 {"name": "Patrick","age": 34,"isEmployed": false},
//                 {"name": "Squideward","age": 50,"isEmployed": true},
//                 {"name": "Sandy","age": 27,"isEmployed": false }]`;

// const parsedData = JSON.parse(jsonNames);

// console.log(parsedData);




//------------------How to fetch JSON file
// fetch is a function as an argument we can pass in
// relative or absolute file path or URL
// fetch will return a promise
// follow it with then method
// response.json also return a promise
fetch("person.json")
    .then(response => response.json())
    .then(value => console.log(value))

    // if you would like to iterate through all the objects
    // lets rename value as values

fetch("people.json")
.then(response => response.json())
.then(values => values.forEach(value =>{console.log(value.name)}))
.catch(error => console.error(error));
// know we are iterating through and printing each object 
// if we would like to pring some specific properties like name
// write value.name