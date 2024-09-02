// DOM = DOCUMENT OBJECT MODEL
//       object{} that represents the page you see in the web browser
//       and provides you with an API to interact with it.
//       Web browser constructs the DOM when it loads an HTML document,
//       and structures all the elements in a tree-like representation
//       JavaScript can access the DOM to dynamically(btzwawazi)
//       change the content, structure, and style of a web page. 


// we can access this tree like data structure from the document object

// in order to select an element by its ID
// document.getElementById() 
// our document is an object it contains properties and methods and
// other nested objects

// console.log (document);
// this is going to display the html document

// document.title = "yared"
// document.body.style.backgroundColor = "hsl(0, 0%, 15%)";

// console.dir(document);
// you can also use dir which means directory this will list all 
// of the properties of this object

const username = "";
const welcomeMsg = document.getElementById("welcome-msg");
// const welcomeMsg is the store reference

welcomeMsg.textContent += username === "" ? `Guest` : username;