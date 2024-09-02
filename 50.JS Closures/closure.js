// closure = A funtion defined inside of another function,
//         the inner function has access to the variables
//         and scope of the outer function.
//         Allow for private variables and state maintenance
//        Used frequently in JS frameworks: React, Vue, Angular


// function createCounter(){
    
//     let count = 0;

//     function increment(){
//         count++;
//         console.log(`Count incresed to ${count}`);
//     }

//     function getCount(){
//         return count;
//     }

//     return{increment, getCount};
// // use the function name as property
// // we are retruning an object with a method of increment
// }

// // create object named counter

// const counter = createCounter();
// // this will return object that has increment method

// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();

// console.log(`The Current count is ${counter.getCount()}`);






//-----------create game based on score

function createGame(){
    let score = 0;

    function increaseScore(points){
        score += points;
        console.log(`+${points}pts`);
    }
    
    function decreaseScore(points){
        score -= points;
        console.log(`-${points}pts`);
    }
    
    function getScore(){
        return score;
    }
    return {increaseScore,decreaseScore,getScore};
}
// create game function to retrun an object

const game = createGame();


game.increaseScore(5);
game.increaseScore(6);
game.decreaseScore(3);
console.log(`The final score is ${game.getScore()}`);

// especially when you work with functional based componenets