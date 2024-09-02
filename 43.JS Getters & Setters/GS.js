// getter = special method that makes a property readable
// setter = special method that makes a property writeable

// validate and modify a value when rading/writing a property


// Helps with validation when creating an object or 
// updating one of its properties

class Rectangle{
    constructor(width,height){
        this.width = width;
        this.height = height;
    }
    
    set width(newWidth){ // special type of method
        if(newWidth > 0){
            this._width = newWidth;
// using underscore prefix it tells other developer that this is
// a private property you shouldn't touch it 
        }
        else{
            console.error("Width must be positive number");
        }
    }

    set height(newHeight){ // special type of method
        if(newHeight > 0){
            this._height = newHeight;
        }
        else{
            console.error("Height must be positive number");
        }
    }


    // with getter you can even add additional logic
    get width(){ // another type of method
        return this._width.toFixed(1);
    }

    get height(){
        return this._height.toFixed(1);
    }
    //with getters we can use property accessor to access a property
//that doesn't necessarily exist
// we can access the area as if it was property
    get area(){
        return (this._width * this._height);
    }
// we can access area as if it was property tho it's not found in the constructor
}

const rectangle = new Rectangle(3,4);

rectangle.width = 5;
rectangle.height = 6; //you can update the value by using setters

console.log(rectangle.width ); // -1000000 // undefined 
console.log(rectangle.height); // pizza    // undefined
// the values doesn't make any sense height to be -ve
// width to be string work so
// we can use some validation when creating and object


// these properties are writable via setter but they're not readable

console.log(rectangle.area);











                       // Example 2222222222



class Person {
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    set firstName(newFirstName){
        if(typeof newFirstName == "string" && newFirstName.length>0){
            this._fistName = newFirstName;
        }
        else{
            console.error("First name must be a non-empty string");
        }
    }
    set lastName(newLastName){
        if(typeof newLastName == "string" && newLastName.length>0){
            this._lastName = newLastName;
        }
        else{
            console.error("Last name must be a non-empty string");
        }
    }
    set age(newAge){
        if(typeof newAge == "number" && newAge >= 0){
            this._age = newAge;
        }
        else{
            console.error("Age must be a non-negative number");
        }
    }

    get firstName(){
        return this._fistName;
    }
    get lastName(){
        return this._lastName;
    }
    get fullName(){
        return this._fistName +" "+ this._lastName;
    }
    get age(){
        return this._age;
    }

}

const person = new Person("Spongebob","Squarepants",30);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age);