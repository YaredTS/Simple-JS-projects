// string methods = allow you to manipulate and work with text (strings)


let userName = "TSbenTSben";

console.log(userName.charAt(0)); // charAt (character at)
console.log(userName.indexOf("b")); // indexOf occurrence of a character
console.log(userName.lastIndexOf("b"));
console.log(userName.length);
userName = userName.trim(); // to trim the space 
// userName = userName.toUpperCase
// userName = userName.toLowerCase
userName = userName.repeat(3); // repeating the string 3 times
console.log(userName);

let yourname = " yared";

let result = yourname.startsWith(" ");  // or endsWith("") , includes(" ") //boolean true or false

if (result) {
    console.log("Your username can't begin with' '")
}
else{
    console.log(yourname);
}

let phoneNumber = "123-456-7890";

phoneNumber = phoneNumber.replaceAll("-","/"); //replacing - with /

console.log(phoneNumber);

let phone= "123-456-7890";

phone = phone.padStart(15,"0"); // pad this string with 0 until it is 15 character long
// padend
console.log(phone);

// charAt(0)
// indexOf("b")
// lastIndexOf("b")
// length
// trim()
// toUpperCase
// toLowerCase
// repeat(3)
// startsWith(" ")
// replaceAll("-","/")
// padStart(15,"0")