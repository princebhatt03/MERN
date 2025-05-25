const employee1 = {
  name: 'Prince Bhatt',
  skills: 'Full Stack Development',
  Collage: 'SATI',
  Age: 22,
};

let employee2 = {
  name: 'Vanshika Nema',
  skills: 'Full Stack Development',
  Collage: 'SATI',
  Age: 22,
};

const employee3 = {
  name: 'Virat Kohli',
  skills: 'Cricket',
  Age: 34,
};

console.log(employee2);
console.log(employee2.name);
employee2 = { ...employee2, city: 'Vidisha' };
console.log(employee2);
