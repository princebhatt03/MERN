// 1. Filter: Filter from Array...

const myArr = [1, 2, 3, 4, 5, 6];

const evens = myArr.filter((num, index) => {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
});

console.log(evens);

// 2. Map: Convert or Maps into another values and makes a new Array...

const myArr2 = [1, 2, 3, 4, 5555, 666];

let sqaures = myArr2.map(num => {
  return num * num;
});

console.log(sqaures);

// 3. Reduce: Provide single value based on the condition

const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
// sum will be 10
