let b1 = document.querySelector('.btn1');
let b2 = document.querySelector('.btn2');
let b3 = document.querySelector('.btn3');
let para = document.querySelector('.para');
let bag = 0;

// console.log(b1);

b1.addEventListener('click', function () {
  bag += 1;
  para.textContent = 'Bag has ' + bag + ' Items';
});
b2.addEventListener('click', function () {
  bag -= 1;
  para.textContent = 'Bag has ' + bag + ' Items';
});
b3.addEventListener('click', function () {
  bag += 2;
  para.textContent = 'Bag has ' + bag + ' Items';
});
