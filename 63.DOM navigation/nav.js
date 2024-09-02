// DOM Navigation = The process of navigating through the structure 
//                             of an HTML document using JavaScript.


// PROPERTIES for DOM navigation

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children



//------------- .firstElementChild------------

// const element = document.getElementById("fruits");
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "yellow";
// this will highling the fruits catagies first child which is apple


// if we want to highlight the first element children of all
// the unordered list 

// const ulElements = document.querySelectorAll("ul");

// ulElements.forEach(ulElement =>{
//     const firstChild = ulElement.firstElementChild;
//     firstChild.style.backgroundColor = "yellow";
// });






// ---------- .lastElementChild ----------

// const element = document.getElementById("fruits");
// const lastChild = element.lastElementChild;
// lastChild.style.backgroundColor = "yellow";



// const ulElements = document.querySelectorAll("ul");

// ulElements.forEach(ulElement => {
//     const lastChild = ulElement.lastElementChild;
//     lastChild.style.backgroundColor = "yellow";
// });








// ---------- .nextElementSibling ----------

// const element = document.getElementById("fruits");
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "yellow";


// i am selecting apple the next sibling to that is orange



// if i were to select the unordered fruits 
// it will hightlight the next unordered list vegetables
// because fruits,vegetables and desserts they are all children
// of the body means they are all siblings to one another







// ---------- .previousElementSibling ----------

// const element = document.getElementById("desserts");
// const prevSibling = element.previousElementSibling;
// prevSibling.style.backgroundColor = "yellow";

// prebious sibling of desserts is vegetable





// ---------- .parentElement ----------

//  const element = document.getElementById("ice cream");
//  const parent = element.parentElement;
//  parent.style.backgroundColor = "yellow";






// ---------- .children ----------

 const element = document.getElementById("fruits");
 const children = element.children;

 Array.from(children).forEach(child => {
     child.style.backgroundColor = "yellow";
 });