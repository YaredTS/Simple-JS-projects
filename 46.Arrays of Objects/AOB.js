
// object can have their own unique properties and methods
const fruits = [{name: "apple", color: "red", calories: 95},
                {name: "orange", color: "orange", calories: 45},
                {name: "banana", color: "yellow", calories: 105},
                {name: "coconut", color: "white", calories: 159},
                {name: "pineapple", color: "yellow", calories: 37}];

// -----there is alot we can do with this
// -------------If you ever need aproperty within one of these 
//-------------------------------------objects of your array

console.log(fruits[0].name);

// ---------------To add new object you can use the push method-------------

fruits.push({name: "grapies", color: "purple", calories: 62});
console.log(fruits);

// -----------------To remove elements------------
// fruits.pop();
// or using splice which will remove elements at certain indices
// fruits.splice(1,2);


// -------------- forEach() ----------
// to loop through the elements of your array

fruits.forEach(fruit => console.log(fruit.color));
fruits.forEach(fruit => console.log(fruit.name));
fruits.forEach(fruit => console.log(fruit.calories));

//--------------map()----------------
// will run each element through a function and retrun new array

const fruitNames = fruits.map(fruit => fruit.name);
const fruitColors = fruits.map(fruit => fruit.color);

console.log(fruitNames);
console.log(fruitColors);

//-------------filter()--------------
// will return new array after using each elemetn and checking
// condition

// lets return new array where the color of each fruit is yellow

const yellowFruits = fruits.filter(fruit => fruit.color === 'yellow');

// lets create new array of any fruits that are low in calories
// where the calories is below 100

const caloriesNumber = fruits.filter(fruit => fruit.calories <= 100);

console.log(yellowFruits);
console.log(caloriesNumber);


//---------------------reduce()------------
// will return single value in this case the object 
// let's return an object with the greatest amount of calories


const maxFruit = fruits.reduce((max,fruit) => 
// the accumulater is max and the element is fruit
// max is the current record holder of the object with
// the greatest amount of calories
// element is fruit meaning the next fruit
                                fruit.calories > max.calories ?
// is our fruit the next fruit in line are the calories greater
// than our current record holder calories max
                                fruit : max);

console.log(maxFruit);
