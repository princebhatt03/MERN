// Loops : IN JS, Loops are used to execute a block of code repeatedly until a specified condition is met.
// There are several types of loops in JavaScript, including for, while, and do-while loops. Each type has its own use case and syntax, but they all serve the purpose of iterating over a block of code multiple times.
// Loops are commonly used for tasks such as iterating over arrays, processing data, or performing repetitive actions. They allow developers to write more efficient and concise code by avoiding the need to manually repeat the same code multiple times.
// Example of a for loop
for (let i = 0; i < 5; i++) {
  console.log(`Iteration ${i + 1}`);
}
// Output:
// Iteration 1
// Iteration 2
// Iteration 3
// Iteration 4
// Iteration 5

// Example of a while loop
let j = 0;
while (j < 5) {
  console.log(`While Loop Iteration ${j + 1}`);
  j++;
}
// Output:
// While Loop Iteration 1
// While Loop Iteration 2
// While Loop Iteration 3
// While Loop Iteration 4
// While Loop Iteration 5

// Example of a do-while loop
let k = 0;
do {
  console.log(`Do-While Loop Iteration ${k + 1}`);
  k++;
} while (k < 5);
// Output:
// Do-While Loop Iteration 1
// Do-While Loop Iteration 2
// Do-While Loop Iteration 3
// Do-While Loop Iteration 4
// Do-While Loop Iteration 5

// Example of a for...of loop
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
for (const item of myArr1) {
  console.log(item);
}
// Output:
// 1
// 2
// 3
// 4
// Prince Bhatt
// Vanshika Nema
// true
// null
// undefined
// { name: 'Prince Bhatt' }

// Example of a for...in loop
const myObj = {
  name: 'Prince Bhatt',
  age: 25,
  city: 'Indore',
};

for (const key in myObj) {
  console.log(`${key}: ${myObj[key]}`);
}
// Output:
// name: Prince Bhatt
// age: 25
// city: Indore

// Example of a forEach loop
myArr1.forEach((item, index) => {
  console.log(`Index ${index}: ${item}`);
});
// Output:
// Index 0: 1
// Index 1: 2
// Index 2: 3
// Index 3: 4
// Index 4: Prince Bhatt
// Index 5: Vanshika Nema
