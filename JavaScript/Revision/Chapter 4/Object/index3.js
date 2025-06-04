// Object References
// const myObj2 = myObj1;
// myObj2.age = 30;
// console.log(myObj1.age); // 30
// console.log(myObj2.age); // 30

let a = 10;
let b = a;

console.log(a); // 10
console.log(b); // 10
a = 9;
console.log(a); // 9
console.log(b); // 10

let obj1 = {
  name: 'Prince',
  age: 20,
};

let obj2 = obj1;
console.log(obj1); // { name: 'Prince', age: 20 }
console.log(obj2); // { name: 'Prince', age: 20 }
obj1.age = 22;
console.log(obj1); // { name: 'Prince', age: 22 }
console.log(obj2); // { name: 'Prince', age: 22 }
obj2.name = 'Bhatt';
console.log(obj1); // { name: 'Bhatt', age: 22 }
console.log(obj2); // { name: 'Bhatt', age: 22 }

// Object references are shared, so changes in one object reflect in the other, whereas primitive types (like numbers) do not share references.
// In Object Refereces, == and === operators will return false for different objects, even if they have the same properties and values.
// For example:
const objA = { name: 'Alice' };
const objB = { name: 'Alice' };
console.log(objA == objB); // false
console.log(objA === objB); // false

// To avoid this, you can create a copy of the object instead of referencing it.
// To create a copy of an object, use Object.assign or the spread operator
let obj3 = Object.assign({}, obj1);
let obj4 = { ...obj1 };
console.log(obj3); // { name: 'Bhatt', age: 22 }
console.log(obj4); // { name: 'Bhatt', age: 22 }
