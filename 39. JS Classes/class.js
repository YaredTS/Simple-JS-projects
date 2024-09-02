// class = (ES6 feature) provides a more structure and cleaner
//        way to work with objects compared to traditional 
//      constructor function 
//       ex. static keyword, encapsulation, inheritance

// function Product(name,price){

//     this.name  = name;
//     this.price = price;

//     this.displayProduct = function(){
//         console.log(`Product:${this.name}`);
//         console.log(`Price: $${this.price.toFixed(2)}`);
//     }
// }

// const salesTax = 0.05;

// const product1 = new Product("Shirt", 19.99);
// const product2 = new Product("Pants", 22.50);
// const product3 = new Product("Underwear", 100.00);

// product1.displayProduct();

// const totalPrice = product1.calculateTotal(salesTax);

// console.log(`Total price(with tax): $${totalPrice.toFixed(2)}`);


// instead of using constructor like the above 
// lets use a class, our class will include a constructor

class Product { // to use a constructor we can use constructor keyword
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
// create a function but note that inside of class 
// you don't need to use the function keyword
    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }
    // am going to add another Method with one parameter
    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}
const salesTax = 0.05;

// let's create some product object new ones

const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 22.50);
const product3 = new Product("Underwear", 100.00);

product1.displayProduct();

const total = product1.calculateTotal(salesTax);
console.log(`Total price(with tax) : $${total.toFixed(2)}`);