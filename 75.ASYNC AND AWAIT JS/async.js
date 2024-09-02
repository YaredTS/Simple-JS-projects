// Async/Await = Async = makes a function return a promise
//               Await = makes an async function wait for a promise

// Allows you write asynchronous code in a synchronous manner
// Async doesn't have resolve or reject set up as parameters
// Everything after Await is placed in an event queue


// await makes async function wait for a promise before continuing





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
            const trashTakenOut = true;
            if(trashTakenOut){
                resolve("You take out the trash ♻");
            }else{
                reject("You haven't taken out the trash");
            }

        }, 500);
    })
}

// a function can be declared with async
// a function declared with async will return a promise
// however that promise that's returned doesn't resolve or reject
// its like empty promise 
// so aync works together with await

async function doChores(){

    try{
        const walkDogResult = await walkDog();
        console.log(walkDogResult);
        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);
        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);
    
        console.log("You finished all the chores!");
    }
    catch(error){
        console.error(error);
    }

    
}

doChores();

