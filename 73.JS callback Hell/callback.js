// Callback Hell = Situation in JavaScript where callbacks 
//                 are nested within other callbacks to the
//                 degree where the code is difficult to read.
//                 Old pattern to handle asynchronous functions.
//                 Use Promises + async/await to avoid Callback Hell


// asynchronous function can compelete at any time the rest of the
// program doesn't wait around for them to finish

function task1(callback){

    setTimeout(() =>{
        console.log("Task 1 complete");
        callback();
    }, 2000);
// setTimeout takes two argument a callback and a time in milliseconds in which to complete this code 
}

function task2(callback){
    setTimeout(() =>{
        console.log("Task 2 complete");
        callback();
    },1000);
}

function task3(callback){
    setTimeout(() =>{
        console.log("Task 3 complete");
        callback();
    }, 3000);
}

function task4(callback){
    setTimeout(() =>{
        console.log("Task 4 complete");
        callback();
    }, 1500);
}

task1(()=>{
    task2(()=>{
        task3(()=>{
            task4(()=> console.log("All tasks complete"));
        })
    })
});


// so what we have done is use callback hell it's where you're
// nesting callbacks inside of other callbacks



// if you have lots of tasks to complete an order it can become
// very unmanageable