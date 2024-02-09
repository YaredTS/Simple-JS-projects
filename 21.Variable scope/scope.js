// Variable scope = Where a variable is recognized and 
                    // accessible (local vs global)

  // Functions can't see inside of other functions
  // any vaiable declared inside of function it is local scope
// function function1(){
//     let x = 7
//     console.log(x);
// }
// function function2(){
//     let y = 5
//     console.log(y);
// }
// function1();
// function2();






  // any variable declared outside of a function has a globla scope
let x = 3;

function function1(){
    console.log(x);
}
function function2(){
    console.log(x);
}
function2();