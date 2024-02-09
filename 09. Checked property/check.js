// checked = property that determines the checked state of an
//            HTML checkbox or radio button element

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");
 
mySubmit.onclick = function (){

    if(myCheckBox.checked){
        subResult.textContent = `You have subscribed`; // template literal (``)
    }
    else {
        subResult.textContent = `You have not subscribe`;
    }


    if(visaBtn.checked){
        paymentResult.textContent = `You have payed with Visa`; 
    }
    else if(mastercardBtn.checked)  {
        paymentResult.textContent = `You have payed with Mastercard`;
    }
    else if(paypalBtn.checked)  {
        paymentResult.textContent = `You have payed with Paypal`;
    }
    else{
        paymentResult.textContent = `You have not select any type of payment`;
    }
}