let sub1 = prompt('Enter you Maths Marks: ');
sub1 = parseInt(sub1);
let sub2 = prompt('Enter you Physics Marks: ');
sub2 = parseInt(sub2);
let sub3 = prompt('Enter you Chemistry Marks: ');
sub3 = parseInt(sub3);
let sub4 = prompt('Enter you Hindi Marks: ');
sub4 = parseInt(sub4);
let sub5 = prompt('Enter you English Marks: ');
sub5 = parseInt(sub5);
let marks = sub1 + sub2 + sub3 + sub4 + sub5;
console.log('Marks = ' + marks);
let percent = (marks * 100) / 500;
console.log('Percentage = ' + percent);
if (percent >= 90 && percent <= 100) {
  console.log('Excellent');
} else if (percent >= 80 && percent < 90) {
  console.log('Very Good');
} else if (percent >= 70 && percent < 80) {
  console.log('Good');
} else if (percent >= 60 && percent < 70) {
  console.log('Good But Do hard Work');
} else if (percent >= 45 && percent < 60) {
  console.log('Average');
} else if (percent >= 33 && percent < 45) {
  console.log('Pass With Grace');
} else if (percent < 33) {
  console.log('FAIL');
} else {
  console.log('Enter Valid Inputs');
}
