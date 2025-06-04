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

// Array Methods

console.log(myArr1.length); // Output: 9
console.log(myArr1.indexOf('Prince Bhatt')); // Output: 3
console.log(myArr1.includes('Hello')); // Output: true
console.log(myArr1.join(', ')); // Output: 1, 2, 33, Prince Bhatt, Hello, true, null, undefined, [object Object]
console.log(myArr1.slice(0, 3)); // Output: [1, 2, 33]
console.log(myArr1.splice(2, 2)); // Output: [33, 'Prince Bhatt']
console.log(myArr1); // Output: [1, 2, 'Hello', true, null, undefined, { name: 'Prince Bhatt' }]
console.log(myArr1.reverse()); // Output: [{ name: 'Prince Bhatt' }, undefined, null, true, 'Hello', 2, 1]
console.log(myArr1.sort()); // Output: [null, true, undefined, 'Hello', 1, 2, { name: 'Prince Bhatt' }] (Note: sorting may not work as expected for mixed types)
console.log(myArr1.map(item => typeof item)); // Output: ['number', 'number', 'string', 'boolean', 'object', 'undefined', 'object']
console.log(myArr1.filter(item => typeof item === 'number')); // Output: [1, 2]
console.log(
  myArr1.reduce((acc, item) => acc + (typeof item === 'number' ? item : 0), 0)
); // Output: 3 (sum of numbers in the array)
console.log(myArr1.find(item => typeof item === 'string')); // Output: 'Hello' (first string found)
console.log(myArr1.findIndex(item => typeof item === 'string')); // Output: 2 (index of first string found)
console.log(myArr1.every(item => typeof item === 'number')); // Output: false (not all items are numbers)
console.log(myArr1.some(item => typeof item === 'string')); // Output: true (at least one item is a string)
