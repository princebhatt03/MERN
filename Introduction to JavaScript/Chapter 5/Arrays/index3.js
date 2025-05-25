// Array Methods

// 1. length

let arr = [1, 2, 3, 4, 55];
console.log(arr.length);

// 2. ToString

let str = arr.toString();
console.log(typeof str);

// 3. Join

console.log(arr.join('+'));
console.log(typeof arr);

// 4. Pop, Push

console.log(arr.pop());
let pushh = arr.push(767);
console.log(arr);

// 5. Shift

console.log(arr.shift());
console.log(arr.unshift());

// 6. delete

delete arr[2];
console.log(arr);
console.log(arr.length);
