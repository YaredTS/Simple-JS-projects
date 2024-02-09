// Method chaining = calling one method after another
                    //  in one continous line of code



// ---------- NO METHOD CHAINING ----------


let username = window.prompt("Enter your username:");

username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extrachars = username.slice(1);
extrachars = extrachars.toLowerCase();

username = letter + extrachars;
console.log(username);

// ------------ METHOD CHAINING --------------
// the above is hard to write its alot but with METHOD CHAINING
// we can combine these steps together avoiding creating variables 
// we don't need such as letter and extrachars


username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

console.log(username);
