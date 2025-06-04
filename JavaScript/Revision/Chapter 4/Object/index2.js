// Nested Objects
const myObj2 = {
  name: 'Prince Bhatt',
  age: 22,
  email: 'prince@gmail.com',
  projects: {
    React: {
      name: 'React Project',
      description: 'A project built with React',
      year: 2023,
    },
  },
};

// Accessing nested object properties
console.log(myObj2.projects.React.name);
console.log(myObj2.projects.React.description);
