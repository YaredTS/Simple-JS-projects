// how to accept user input

//1. easy way = window prompt
// 2. professional way = html textbox


//1.
// let username;
// username = window.prompt("What's your username?");

// OR let username = window.prompt("What's your username?")
// console.log(username);


//2.

let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hi There Mr/Ms ${username}`


    // console.log(username);

}
