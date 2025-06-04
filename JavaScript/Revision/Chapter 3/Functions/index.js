// Functions in JS
// Function is a block of code designed to perform a particular task
// Function Declaration
function greet(name) {
  console.log(`Hello, ${name}!`);
}

// Function Expression
const greetExpression = function (name) {
  console.log(`Hello, ${name}!`);
};

// Arrow Function
const greetArrow = name => {
  console.log(`Hello, ${name}!`);
};

// Calling the functions
greet('Prince');
greetExpression('Vanshi');
greetArrow('Virat');

// Function with return value
function add(a, b) {
  return a + b;
}

// Functions with Defualt Parameters
function multiply(a, b = 1) {
  return a * b;
}

// Function with Rest Parameters
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
