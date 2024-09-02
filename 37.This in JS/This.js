// this = reference to the object where THIS is used
//        (the object depends on the immidiate context)
//             person.name = this.name

const person1 = {
    name: "Spongebob",
    favFood: "Hamburgers",
    sayHello: function(){console.log(`Hi! My name is ${this.name}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
}


// this keyword doesn't work on arrow function

const person2 = {
    name: "Spongebob",
    favFood: "Hamburgers",
    sayHello: function(){console.log(`Hi! My name is ${this.name}`)},
    eat: () => {console.log(`${this.name} is eation ${this.favFood}`)}
}


person1.eat();
person2.eat();

// when you use this keyword within arrow function it's making
// reference to that window object still

// it does have a name but favFood is undefined b/c our window
// object doesn't have favFood property