let Firstname;
let Lastname;

document.getElementById("B1").onclick = function(){
    Firstname = document.getElementById("F1").value;
    Lastname = document.getElementById("L1").value;
    document.getElementById("H1").textContent = `Hello ${Firstname} ${Lastname}`
}