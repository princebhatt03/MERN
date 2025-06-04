// 2. Arrow Functions

let sum = (num1, num2) => {
  return num1 + num2;
};

console.log(sum(1, 2));
console.log(sum);
console.log(typeof sum);

// Different ways to declare a Arrow Functions

let sq = num => {
  return num * num;
};

let sq2 = num => num * num;

console.log(sq(12));
console.log(sq2(13));
