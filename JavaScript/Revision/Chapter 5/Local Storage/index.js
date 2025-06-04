// JSON: JSON is JavaScript Object Notation, a lightweight data interchange format.
// This code is a simple example of how to use JSON in JavaScript.
// Example: Converting a JavaScript object to JSON and back.
const person = {
  name: 'John Doe',
  age: 30,
  city: 'New York',
};
// Convert JavaScript object to JSON string
const jsonString = JSON.stringify(person);
console.log('JSON String:', jsonString);

// In JSON all the keys must be in double quotes

/* 

const myJSONObject ={
    "name": "Prince Bhatt",
    "age": 25,
    "city": "Vidisha",
}

*/

const obj2 = {
  name: 'Prince Bhatt',
  age: 25,
};

const myJSON = JSON.stringify(obj2);
console.log('JSON String:', myJSON);
