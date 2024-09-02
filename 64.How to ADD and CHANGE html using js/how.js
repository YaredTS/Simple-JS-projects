// ---------- EXAMPLE 1 h1 ELEMENT ----------

// --------STEP 1 CREATE THE ELEMENT
// const newH1 = document.createElement("h1");
//  we know has h1 element to  work with which was
// referencing as newH1

//----------- STEP 2 ADD ATTRIBUTES/PROPERTIES
// newH1.textContent = "I like pizza!";
// newH1.id = "myH1";
// newH1.style.color = "tomato";
// newH1.style.textAlign = "center";

// --------STEP 3 APPEND ELEMENT TO DOM
// to do that we will acces our DOM with document

// document.body.append(newH1);

// when u appent element to parent this newH1 element is the 
// last child
// you could prepend if you wanted it to be first child




// document.body.prepend(newH1); // first child
// document.getElementById("box1").append(newH1); // append newH1 into box 1
// document.getElementById("box1").prepend(newH1);



// ---------to insert newH1 element in between the box
// const box4 = document.getElementById("box4");
// document.body.insertBefore(newH1, box4);


// ----------what if they don't have id 
// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, boxes[0]);

// -----------REMOVE HTML ELEMENT
// document.body.removeChild(newH1);
// document.getElementById("box1").removeChild(newH1);

// If at anytime you neet to remove an element select the
// parent of that element then follow it with the remove child method
// pass in what you are trying to remove as an argument













// ---------- EXAMPLE 2 li ELEMENT ----------

// STEP 1 CREATE THE ELEMENT
 const newListItem = document.createElement("li");

// STEP 2 ADD ATTRIBUTES/PROPERTIES
newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";

// STEP 3 APPEND ELEMENT TO DOM
// document.body.append(newListItem);
// document.body.prepend(newListItem);
//document.getElementById("fruits").append(newListItem);
// document.getElementById("fruits").prepend(newListItem);


// To insert inbetween
// const banana = document.getElementById("banana");
// document.getElementById("fruits").insertBefore(newListItem, banana);

// What if they do'nt have id
// const listItems = document.querySelectorAll("#fruits li");
// document.getElementById("fruits").insertBefore(newListItem, listItems[1]);

// REMOVE HTML ELEMENT
// document.body.removeChild(newLink);
// document.getElementById("fruits").removeChild(newListItem);