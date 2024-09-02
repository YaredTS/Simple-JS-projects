// Promise = An Object that manages asynchronous operations.
//           Wrap a Promise Object around {asynchronous code}
//           "I promise to return a value"
//           PENDING -> RESOLVED or REJECTED
//          new Promise((resolve, reject) => {asynchronous code})

// DO THESE CHORES IN ORDER

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

// function walkDog(callback){

//     setTimeout(() => {
//         console.log("You walk the dog 🐕");
//         callback();
//     }, 1500);
// }

// function cleanKitchen(callback){

//     setTimeout(() => {
//         console.log("You cleaned the kitchen 🧹");
//         callback();
//     }, 2500);
// }

// function takeOutTrash(callback){

//     setTimeout(() => {
//         console.log("You take out the trash ♻");
//         callback();
//     }, 500);
// }

// walkDog(() =>{
//     cleanKitchen(() =>{
//         takeOutTrash(() => console.log("You finished all the chores!"));
//     })
// })

// By using promise we don't need callbacks
// instead of using callbacks we'll use method chanining
// we will method chain our promises




//----------------BY using promises



// function walkDog(){


//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//            resolve("You walk the dog 🐕");
//         }, 1500);
//     })

// }

// function cleanKitchen(){

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("You cleaned the kitchen 🧹");
//         }, 2500);
//     })

// }

// function takeOutTrash(){
    
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("You take out the trash ♻");
//         }, 500);
//     })
// }


// method chaining
// walkDog().then(value => {console.log(value); return cleanKitchen()})
//          .then(value => {console.log(value); return takeOutTrash()})
//          .then(value => {console.log(value); console.log("You finished all the chores!")});


// somethimes with asynchronous functions depending on the task
// the task may fail let's say we're tring to locate a resource a file
// if we can't locate that file and we're using promises
// we don't want to resolve that promises because we couldn't 
// locate that file
// instead we want to reject
// that's what happen whtn an asynchronous function failed to do 
// something 
//------so lets change our function around with in the set timeout



function walkDog(){


    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const dogWalked = true;

            if(dogWalked){
                resolve("You walk the dog 🐕");
            }else{
                reject("You haven't walked the dog");
            }

        }, 1500);

    })
 
}

function cleanKitchen(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = true;
            if(kitchenCleaned){
                resolve("You cleaned the kitchen 🧹");
            }else{
                reject ("You haven't cleaned the kictchen");
            }

        }, 2500);
    })

}

function takeOutTrash(){
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashTakenOut = false;
            if(trashTakenOut){
                resolve("You take out the trash ♻");
            }else{
                reject("You haven't taken out the trash");
            }

        }, 500);
    })
}

// If a promise might reject 
// there is one more method we need to add to the end of this chain

walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); console.log("You finished all the chores!")})
         .catch(error => console.error(error));

