// sort() = method used to sort elements of an array in place.
//       sorts elements as strings in lexicographic order, not alphabetical
//     lexicographic = (alphabet + numbers + symbols) as strings

let fruits = ["apple","orange","banana","coconut","pineapple"];

fruits.sort();
console.log(fruits);


let numbers = [1,10,2,9,3,8,4,7,5,6];

numbers.sort((a,b) => a-b);
console.log(numbers);

// you can also sort an object by a given property 

const people = [{name : "Spongebob", age:30, gpa: 3.0},
                {name : "Patrick", age:37, gpa: 1.5},
                {name : "Squidward", age:51, gpa: 2.5},
                {name : "Sandy", age:27, gpa: 4.0}]

people.sort((a,b) => a.age - b.age);

console.log(people);

// If you need to sort by a property that contain a sting with in
// an object there's different formula

people.sort((a,b) => a.name.localeCompare(b.name));

console.log(people);