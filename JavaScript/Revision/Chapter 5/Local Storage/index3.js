const myJSON = {
  name: 'Prince Bhatt',
  age: 25,
  city: 'Vidisha',
};

// Convert JavaScript object to JSON string
// const jsonString = JSON.stringify(myJSON);

localStorage.setItem('myOBJ', JSON.stringify(myJSON));
console.log('JSON String:', localStorage.getItem('myOBJ'));

let prod2 = JSON.parse(localStorage.getItem('myOBJ'));
console.log('Parsed Object:', prod2);

// Remove the item from localStorage
localStorage.removeItem('myOBJ');

