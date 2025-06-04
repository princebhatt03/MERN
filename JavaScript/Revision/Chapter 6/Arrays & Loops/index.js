// Arrays: Arrays in JavaScript are used to store multiple values in a single variable. They are a special type of object and can hold any type of data, including numbers, strings, and even other arrays.
// Arrays are zero-indexed, meaning the first element is at index 0. You can access elements using their index, modify them, and use various methods to manipulate the array.
// Arrays are dynamic in size, meaning you can add or remove elements as needed. They are commonly used for storing lists of items, such as names, numbers, or objects.
// Arrays are mutable, meaning you can change their contents after they are created. You can also use various array methods to perform operations such as sorting, filtering, mapping, and reducing to manipulate and process array data efficiently.
// Example of an array

const fruits = ['apple', 'banana', 'cherry'];
// Accessing elements in an array
console.log(fruits[0]); // Output: apple

const myArr1 = [
  1,
  2,
  33,
  'Prince Bhatt',
  'Hello',
  true,
  null,
  undefined,
  { name: 'Prince Bhatt' },
];
// Accessing elements in an array
console.log(myArr1[3]); // Output: Prince Bhatt

// Modifying elements in an array
myArr1[0] = 100;
console.log(myArr1[0]); // Output: 100

// Adding elements to an array
myArr1.push('New Element');

// Printing full Array
console.log(myArr1);
