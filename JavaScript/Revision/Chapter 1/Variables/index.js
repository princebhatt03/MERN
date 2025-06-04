// JS Variables
// Variables are containers for storing data values.
// In JavaScript, there are three ways to declare a variable: var, let, and const.
// 1. var - function scoped or globally scoped
var x = 5;
// 2. let - block scoped
let y = 10;
// 3. const - block scoped, cannot be reassigned
const z = 15;
// Variables can be declared without initialization
var a; // Declaration without initialization
// Variables can be declared and initialized in the same line
let b = 20; // Declaration with initialization

// Variables can be reassigned
x = 10; // Reassigning a variable declared with var
y = 15; // Reassigning a variable declared with let
console.log(x, y, z); // Output: 10 15 15
