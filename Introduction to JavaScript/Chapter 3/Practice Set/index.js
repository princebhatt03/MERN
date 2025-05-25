// Question 1

let obj1 = {
  Prince: 80,
  Vanshi: 98,
  Virat: 82,
};
for (let i = 0; i < Object.keys(obj1).length; i++) {
  console.log(
    'The marks of ' +
      Object.keys(obj1)[i] +
      ' are ' +
      obj1[Object.keys(obj1)[i]]
  );
}
