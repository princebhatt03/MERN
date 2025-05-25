let a = prompt('Enter Your Age');
a = Number.parseInt(a);
if (a >= 18 && a <= 60) {
  console.log('You Can Drive');
} else if (a < 18) {
  console.log('You cannot Drive');
} else if (a > 60) {
  console.log('You cannot Drive because you are too old');
}
