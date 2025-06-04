// Advanced Function

// 1. Anonymous Functions as Values

let sum = function (num1, num2) {
  return num1 + num2;
};

let sumCall = sum;
console.log(sumCall(2, 3));
console.log(sumCall(1, 2) + 9);
console.log(sum);
console.log(typeof sum);

// In this type of functions, we can assign a variable a full function
