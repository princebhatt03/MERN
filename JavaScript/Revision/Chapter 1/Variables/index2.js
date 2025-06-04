let str1 = 'Hello';
let str2 = 'World';
let str3 = str1 + ' ' + str2; // Concatenation
console.log(str3); // Output: Hello World
// Template literals for string interpolation
let name = 'John';
let greeting = `Hello, ${name}!`; // Using template literals
console.log(greeting); // Output: Hello, John!
// String methods
let message = 'JavaScript is fun!';
console.log(message.length); // Output: 20 (length of the string)
console.log(message.toUpperCase()); // Output: JAVASCRIPT IS FUN! (convert to uppercase)
console.log(message.toLowerCase()); // Output: javascript is fun! (convert to lowercase)
console.log(message.indexOf('fun')); // Output: 15 (index of substring 'fun')
console.log(message.slice(0, 10)); // Output: JavaScript (extract substring from index 0 to 10)
console.log(message.replace('fun', 'awesome')); // Output: JavaScript is awesome! (replace substring 'fun' with 'awesome')
console.log(message.split(' ')); // Output: ['JavaScript', 'is', 'fun!'] (split string into an array by spaces)
// String comparison
let strA = 'apple';
let strB = 'banana';
console.log(strA < strB); // Output: true (lexicographical comparison)
console.log(strA > strB); // Output: false (lexicographical comparison)
