// string slicing = creatng a substring 
                    //  from a portion of another string 
                    //  sring.slice(start, end)

// const fullName = "yared tesfaye"

//  let Firstname = fullName.slice (0,5);
// let Lastname = fullName.slice (6,14); // the last index is exclusive

// let Firstname = fullName.slice(0,fullName.indexOf(" "));
// let Lastname = fullName.slice(fullName.indexOf(" ")+1);


// console.log(Firstname);
// console.log(Lastname);


// Exercise

const email = "yaredtesfaye94@gmail.com"

let username = email.slice(0,email.indexOf("9"));
let extention = email.slice(email.indexOf("9")+3);

console.log(username);
console.log(extention);