// constructors = special method for defining the properties 
//                and methods of objects

// const car1 ={
//     make: "Ford",
//     model: "Mustang",
//     year: 2024, 
//     color: "red", 
//     drive: function(){console.log(`You drive the ${this.model}`)}
// }
// const car2 ={
//     make: "Chevrolet",
//     model: "Camaro",
//     year: 2025,
//     color: "blue",
//     drive: function(){console.log(`You drive the ${this.model}`)}
// }
// const car3 ={
//     make: "Dodge",
//     model: "Charger",
//     year: 2026,
//     color: "silver",
//     drive: function(){console.log(`You drive the ${this.model}`)}
// }


// What if we have to create a lots of object like in the above
// here am manually creating three different car objects 
// that can be lot of work .
// Instead we could use Constructor to construct these objects 
// automatically 
// All we have to do to construct these objects is pass in some
// unique data to the constructor


function Car(make,model,year,color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
    this.drive = function(){console.log(`You drive the ${this.model}`)}
}
// our constructor is reusable method where we can define the
// properties and methods of objects we create

// to use this constructor we will create an instance of an
// object

const car1 = new Car("Ford","Mustang",2024,"red");
const car2 = new Car("Chevrolet","Camaro",2025,"blue");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);

car1.drive();
car2.drive();


// it helps for code reusability to create many object instead
// of having to type them all out manually