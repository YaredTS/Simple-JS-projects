
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
// we will be using setinterval function
// setinterval will return an ID that we can work with
// so we will declare a variable to hold to that 
let intervalId = null;

document.addEventListener("DOMContentLoaded",initializeSlider);

function initializeSlider(){
// to avoid displaying an image if we don't have one we will wrap
// the 2 line of code below with if statement 
    if(slides.length > 0){
    slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 5000);
    }

}// this will populate our web browser with the first image when we call this funcion


function showSlide(index){
// we need to reset our slideindex to avoid going out of bounds
// we only has three slides so add if statement
// if we reach the end of our slide we need to reset the slideindex
// and set it back to be zero
    if(index >= slides.length){
        slideIndex = 0;
    }
// know if we go backwards withe the previous button
    else if(index < 0){
        slideIndex = slides.length - 1;
    }
    slides.forEach(slide =>{
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");

}// there will be one parameter an index , an index of the next slide we would like go to
function prevSlide(){
// know if we hit the previous button because we want to look at an
// image the timer is still going we'll still go to the next image
// so if we would like to take time to admire one of these images
// we can clear the setinterval function by using it's intervalId
    clearInterval(intervalId);
    slideIndex --;
    showSlide(slideIndex);
}
function nextSlide(){
    slideIndex ++;
    showSlide(slideIndex);
}