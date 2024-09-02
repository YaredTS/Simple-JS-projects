// cookie = a small text file stored on your computer
//          used to remember information about the user
//          saved in name=value pairs

//------------- inorder to check if we have cookies enabled 
// console.log(navigator.cookieEnabled);


//---------To add a cookie
// we will set it to string but it has certain components 
// name=value pair
// to create a cookie to store a user's first name

// and u can add expiration date when the current time is 
// passed a certain expiration date well then this cookie
// will be deleted

// we also able to set path for this cookie
// i will use the default path 
// document.cookie = "firstName=SpongeBob; expires =Sun, 1 January 2030 12:00:00 UTC; path=/";
// document.cookie = "lastName=SquarePants; expires =Sun, 1 January 2030 12:00:00 UTC; path=/";

// console.log(document.cookie);// even though this appears to be string
// it is actually an object


//--------------Create a function to create cookie instead of doing it manually

// function setCookie(name,value,daysToLive){
//     // as an argument you will pass a number of days that you
//     // you would like this cookieto be set to expire 365 will be one year
//     // lets create date object
//     // then set the time of this date
//     const date = new Date();
//     date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000 );
//     // our future date is currently in milliseconds so
//     // getTime will retrun current time in millisecond and after + we will add
//     // amount of days to live converted to milliseconds
//     // convert that to UTC string date
//     let expires = "expires=" + date.toUTCString();
//     // the assign cookie
//     document.cookie = `${name}=${value};${expires}; path=/`

// }
// // setCookie("email","Sponge@gmail.com",365);
// // console.log(document.cookie);



// //-----------how can we delete a cookie
// // all we have to do is set the expiration date to pass date
// function deleteCookie(name){
//     setCookie(name,null,null);
// }
// // deleteCookie("email");
// // deleteCookie("firstName");
// //deleteCookie("lastName");






// // ---lets create function to get the value of cookie by a name

// function getCookie(name){
// // what we will to do is decode our cookie
// const cDecoded = decodeURIComponent(document.cookie);
// const cArray = cDecoded.split("; "); // this will return an array
// // console.log(cArray);// each name=value pair are now within separate elements
// // know we will check to see if there is match between each of these
// // element names and the name we are looking for 
// let result = null;
// cArray.forEach(element =>{
//     if(element.indexOf(name) == 0){
//         result = element.substring(name.length +1)
//     }
// })
// return result;
// }


// setCookie("firstName","SpongeBob",365);
// setCookie("lastName","SquarePants",365);
// console.log(getCookie("lastName"));
// console.log(getCookie("firstName"));


// what we will need to do is split each of these name value pairs
// at each semicolons


// thats how to set ,delete and get cookies












//---------------let's take this a step further let's create
// some text field a submit button and a get cookies button


const firstText = document.querySelector("#firstText");
const lastText = document.querySelector("#lastText");
const submitBtn = document.querySelector("#submitBtn");
const cookieBtn = document.querySelector("#cookieBtn");

submitBtn.addEventListener("click",() =>{
    setCookie("firstName",firstText.value,365);
    setCookie("lastName",lastText.value,365);
});

cookieBtn.addEventListener("click",() =>{
    firstText.value = getCookie("firstName");
    lastText.value = getCookie("lastName");
})


function setCookie(name,value,daysToLive){
    const date = new Date();
    date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000 );
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;

}

function deleteCookie(name){
    setCookie(name, null, null);
}

function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result = null;
    cArray.forEach(element =>{
        if(element.indexOf(name) == 0){
            result = element.substring(name.length +1)
        }
    })
    return result;
    }
    
