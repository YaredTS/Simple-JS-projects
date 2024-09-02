// .toLocaleString() = returns a string with a language
//                sensitive representation of a number

// number.toLocaleString("locale", {options});

// 'locale' = specify the language (undefined = default set in browser)
// 'options' = object with formatting options

let number = 123456.789;

// number = number.toLocaleString("en-US"); // default locale



number = number.toLocaleString("en-US",{style: "currency",currency: "USD"});  


console.log(number);