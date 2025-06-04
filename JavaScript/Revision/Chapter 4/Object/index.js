// Object in JS
// Objects are a collection of key-value pairs
// Objects are mutable
// Objects can contain other objects

const myObj1 = {
  name: 'Prince Bhatt',
  age: 20,
  isStudent: true,
};

// Accessing object properties
console.log(myObj1);
console.log(myObj1.name);
console.log(myObj1.age);
console.log(myObj1.isStudent);

myObj1.age = 22;
console.log(myObj1);

// Adding new properties to an object
myObj1.isEmployed = false;
console.log(myObj1);

// Deleting properties from an object
myObj1.isStudent = undefined;
console.log(myObj1);
delete myObj1.isEmployed;
console.log(myObj1);

