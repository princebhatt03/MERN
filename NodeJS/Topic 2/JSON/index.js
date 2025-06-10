const fs = require('fs');

const boiData = {
  name: 'Prince',
  age: 21,
  email: 'prince@gmail.com',
};

// const jsonData = JSON.stringify(boiData);

// console.log(jsonData);
// console.log(jsonData.age);

// const obj = JSON.parse(jsonData);

// console.log(obj);
// console.log(obj.age);

const jsonData = JSON.stringify(boiData);

// fs.writeFile('json.json', jsonData, err => {
//   console.log(err);
// });

fs.readFile('json.json', 'utf-8', (err, data) => {
  console.log(data);
  const obj = JSON.parse(jsonData);
  console.log(obj);
});
