// LocalStorage using JSON
// LocalStorage is a web storage API that allows you to store data in the browser.
// It is a key-value store where both keys and values are strings.
// You can use JSON to store complex data structures in LocalStorage by converting them to strings.
// Example: Storing a JavaScript object in LocalStorage
const person = {
  name: 'Prince Bhatt',
  age: 22,
  city: 'Vidisha',
};

// Convert JavaScript object to JSON string
// const jsonString = JSON.stringify(person);
// console.log('JSON String:', jsonString);

// Store JSON string in LocalStorage
// localStorage.setItem('person', jsonString);

// Retrieve JSON string from LocalStorage
// const storedJsonString = localStorage.getItem('person');
// console.log('Stored JSON String:', storedJsonString);

// Convert JSON string back to JavaScript object
// const storedPerson = JSON.parse(storedJsonString);
// console.log('Stored Person Object:', storedPerson);

console.log(localStorage.getItem(person.name)); // This will return null because 'person.name' is not a valid key in localStorage
// To store the person's name in localStorage, you need to use a string as the key
localStorage.setItem('personName', person.name);
console.log(localStorage.getItem('personName')); // This will return 'Prince Bhatt'

