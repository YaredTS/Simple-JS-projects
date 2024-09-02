// eventListener = Listen for specific events to create interactive web pages
//                            events: keydown, keyup
//                            document.addEventListener(event, callback);

// document.addEventListener("keydown", event => {
//     console.log(event);
// });

// press the any  key like A,B,C,D.....

//-----to output the key property
// press down the key
// document.addEventListener("keydown", event => {
//     console.log(`Key down = ${event.key}`);
// });

// release the key
// document.addEventListener("keyup", event => {
//     console.log(`Key up = ${event.key}`);
// });

// arrow keys are also accessible if you would want to make games



//------------- Know we will do on keydown and keyup is change an html element
// const myBox = document.getElementById("myBox");

// document.addEventListener("keydown", event => {
//     myBox.textContent = "😮";
//     myBox.style.backgroundColor = "tomato";
// });

// release the key
// document.addEventListener("keyup", event => {
//     myBox.textContent = "😁";
//     myBox.style.backgroundColor = "lightblue";
// });




//------------ know we will demonstrate using the arrow to move the content

const myBox = document.getElementById("myBox");
const moveAmount = 10;// to increase the movement
let x = 0;
let y = 0;

 document.addEventListener("keydown", event => {
     myBox.textContent = "😮";
     myBox.style.backgroundColor = "tomato";
 })
 // release the key
 document.addEventListener("keyup", event => {
     myBox.textContent = "😁";
     myBox.style.backgroundColor = "lightblue";
 });


document.addEventListener("keydown", event =>{
    console.log(event.key); // since any key you press will display 
    // on the console we only want arrow rignt,left,up and down

    if(event.key.startsWith("Arrow")){

        event.preventDefault();

        // by default when we move the content it will go out side of the border(scroll)
        // we are not going to scroll with it
        switch(event.key){
            case "ArrowUp" :
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;                
        }
        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }
})