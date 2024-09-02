// static = keyword that defines properties or methods that belong
//         to a class itself rather than the objects created
//         from that class(class owns anything static, not the objects)


class MathUtil{
    static PI = 3.14159;
    // create static method
    static getDiameter(radius){
        return radius * 2;
    } 
}
// IF i would like the static property i have to access it 
// by its class
console.log(MathUtil.PI); // name of the property PI // 3.14156

// i don't need to create an object inorder to use this property
console.log(MathUtil.getDiameter(10)); // 20







        //Example to mix of regular proterties and methods
        // and static properties and methods

class User{
    static userCount = 0; // to keep track of amount of user

    constructor(username){
        this.username = username;
        User.userCount++; // increase our userCount by one so we can keep track of how many user
        // inside of constructor u can write additional code it's not only for assigning value
    }
    // static method
    static getUserCount(){
        console.log(`There are ${User.userCount} users online `);
    }
    

    sayHello(){
        console.log(`Hello, my username is ${this.username}`);
    }// regular method
}

const user1 = new User("Spongebob");

console.log(user1.username); //Spongebob
console.log(user1.userCount); // undefined b/c
// our user1 doesn't have userCount as property its static
// it belongs to the class not any objects created from the class
// to access it we have to type name of the class

console.log(User.userCount);
user1.sayHello();
User.getUserCount();

