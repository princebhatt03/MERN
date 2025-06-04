// Arrays Using a For Loop

let arr = ['Prince', 'Vanshi', 123, 'null'];

for (let i = 0; i <= arr.length; i++) {
  console.log(arr[i]);
}

// Array using forEach loop

arr.forEach(element => {
  console.log(element);
});

// Array using for in Loop

for (let a in arr) {
  console.log(a);
  console.log(arr);
}

// Array using for of Loop

for (const elem of arr) {
  console.log(elem);
}
