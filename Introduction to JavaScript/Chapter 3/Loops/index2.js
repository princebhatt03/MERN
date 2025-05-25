// WAP to add first n Natural Numbers

let sum = 0;
let n = prompt('Enter the Value of n:');
n = Number.parseInt(n);
for (let i = 1; i < n; i++) {
  sum += i;
}
console.log('Sum of First ' + n + ' natural numbers is ' + sum);

// Let is block scoop, Var is Global scoop
