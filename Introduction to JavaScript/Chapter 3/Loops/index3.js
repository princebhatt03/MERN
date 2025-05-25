// Varients of For Loop

// 1. For in

let obj1 = {
  Prince: 80,
  Vanshi: 99,
  Virat: 82,
};

for (let a in obj1) {
  console.log('Marks of ' + a + ' are ' + obj1[a]);
}

// 2. For Of

for (let b of 'Prince') {
  console.log(b);
}

// They are widely used for Arrays, we will discuss them further
