// nested objects = objects inside of other objects.
//              Allows you to represent more complex data structures
//            child object is enclosed by a parent object

//           Person{Address{}, ContactInfo{}}
//           ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}

const person = {
    fullName : "Spongebob Squarepants",
    age : 30,
    isStudent : true,
    hobbies : ["karate","jellyfishing","cooking"],// object can also contain arrays
    address : {
        street: "124 Conch st.",
        city: "Bikini Bottom" ,
        country: "Int. water"
    } 
}

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies);// this will return the entire array 
// but if you need indiviual elements
console.log(person.hobbies[0]);
console.log(person.address);// this will return the entire object
// but if you need one of the properties with in the object
// follow the inner object with the property accessor again with(.)
console.log(person.address.street);


// ---------- if you would like to loop through a nested object
// you can write for loop

for(const property in person.address){
    console.log(person.address[property]);
}







//----------------- Example 2------------------
// we are going to create a class that utilizes nested objects

class Person{


    // we can pass in different parts of an ADD address and 
    // store it within an array
    constructor(name,age,...address){
        this.name = name;
        this.age = age;
        // we are going to construct an address object
        this.address = new Address(...address);
    }
}

class Address{

    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}
// lets create person object
const person1 = new Person("Spongebob", 30 , "124 Conch St.",
                                             "Bikini Bottom",
                                              "Int. Waters");

const person2 = new Person("patric", 37 , "128 Conch St.",
                                             "Bikini Bottom",
                                            "Int. Waters");

console.log(person1.address);
// returns object(nested object)
// if we want to access the properties of the nested object
console.log(person1.address.street);
console.log(person2.age);