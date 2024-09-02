// super = keyword is used in classes to call the constructor or 
//       access the properties and methods of a parent (superclass)
//        this = this object
//         super = the parent
// extend method from the parent

class Animal{

    constructor(name , age){
        this.name = name;
        this.age = age;
    }

    move(speed){
        console.log(`The ${this.name} moves at a speed of ${speed}km/hr`);
    }


}
class Rabbit extends Animal{

    constructor(name, age, runSpeed){
//Before we can use this keyword we have to call the constructor
// of the parent (the super class)

// with in this respective constructors we will invoke the constructor
//of the parent the super class with the super keyword
        super(name,age); // but we need to pass name and age argument to the parent constructor
        // this.name = name;// assign properties
        // this.age = age;
        this.runSpeed = runSpeed;
    }

    run(){
        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed);
    }

}

class Fish extends Animal{

    constructor(name, age, swimSpeed){
        super(name,age); 
        // this.name = name;// assign properties
        // this.age = age;
        this.swimSpeed = swimSpeed;
    }

    swim(){
        console.log(`This ${this.name} can swim`);
        super.move(this.swimSpeed);
    }


}

class Hawk extends Animal{

    constructor(name, age, flySpeed){
        super(name,age);
        // this.name = name;// assign properties
        // this.age = age;
        this.flySpeed = flySpeed;
    }

    fly(){
        console.log(`This ${this.name} can fly`);
        super.move(this.flySpeed);
    }

}

const rabbit = new Rabbit("rabbit",1,25);
const fish = new Fish("fish",2,12);
const hawk = new Hawk("hawk",3,50);


// one of the benefits of constructors is that if there's is
// any properties that the children all share in common we
// can send them to the constructor of the parent

// there is name and age proterty in common
// follow th dry principle which state code duplication should
// be avoided whenever possible.

console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);


fish.swim();