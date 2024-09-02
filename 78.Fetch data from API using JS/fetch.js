// ? fetch = Function used for making HTTP requests to fetch resources.
//         (JSON style data, images, files)
//         Simplifies asynchronous data fetching in JavaScript and
//         used for interacting with APIs to retrieve and send
//         data asynchronously over the web.
//         fetch(url, {options})
// option is more advanced javascript
// you may see     -----  fetch(url,{method: "GET"})
// the default is GET to get resource
// POST to send some data
// PUT to replace some data
// DELETE to delete some data

// we will be focusing on getting data with only URL 


// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//       .then(response => console.log(response))
//       .catch(error =>console.error(error));


// we will pass in a string representation of this URL
// the fetch function is promise based its either going to resolve or reject
// once the promise resolves we will be provided with an object
// a response object


// the body contain the data we are looking for in the console.log
// the object has status code of 200 means its okay 


//--------The next step is to convert it to a readable format
// there is a few methods
// arraybuffer, blob,text and json
// we will pick json method 

// ------ so our next step is to take our response object 
// convert it to json format

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//       .then(response => response.json())
// once the promise resolved follow it with then method
//       .then(data => console.log(data.name))
// take the data our json data that is going to be returned to us
// with this json data you can access one of the properties
// data.name
//       .catch(error => console.error(error));


//response.json is also promise based



// ----------even if we can't locate resourse our promise is 
// still going to resolve it is not going to reject
// check to see if our response is not okay 


// fetch("https://pokeapi.co/api/v2/pokemon/spongbob")
//       .then(response => {

//         if(!response.ok){
//             throw new Error("Could not fetch resource");
//         }
//         return response.json();

//       })
// /it is not okay spongebob is not pokemon
// 404 means we couldn't locate this resource okay=false
// ---- we will going to throw an error
// if our property of okay is false
//       .then(data => console.log(data.name))
//       .catch(error => console.error(error));
      







      //--------------- IF you prefer to use async and await


fetchData();


async function fetchData(){

      try{
          const response = await fetch("https://pokeapi.co/api/v2/pokemon/typhlosion");
          // once the promise of fetch resolves
          // we have to see if the response is okay
          if(!response.ok){
            throw new Error("Could not fetch resource");
          }
          // if our response is okay
          // we will create constant for our data

          const data = await response.json(); 
          // this also retrun a promise that's why we use await
          console.log(data);
      }
      catch(error){
          console.error(error);
      }
  }