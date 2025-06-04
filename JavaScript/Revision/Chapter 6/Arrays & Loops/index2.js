const myArr1 = [
  1,
  2,
  3,
  4,
  'Prince Bhatt',
  'Vanshika Nema',
  true,
  null,
  undefined,
  { name: 'Prince Bhatt' },
];

// Accessing elements in an array
console.log(myArr1[4]); // Output: Prince Bhatt

// Accessing elements in an array
console.log(myArr1[5]); // Output: Vanshika Nema

// Accessing elements in an array using for loop
for (let i = 0; i < myArr1.length; i++) {
  console.log(myArr1[i]);
}

// Accessing elements in an array using forEach
for (let i of myArr1) {
  console.log(i);
}

console.log(myArr1.isArray()); // Output: true
