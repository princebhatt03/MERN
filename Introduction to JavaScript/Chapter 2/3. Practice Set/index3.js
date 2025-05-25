// Question 3 and 4

let num = 6;
if (num % 2 == 0 && num % 3 == 0) {
  console.log('The Number ' + num + ' is Divisible by both 2 and 3');
} else if (num % 2 == 0) {
  console.log('The Number ' + num + ' is Divisible by 2 ');
} else if (num % 3 == 0) {
  console.log('The Number ' + num + ' is Divisible by 3 ');
} else {
  console.log('Neither 2 nor 3');
}
