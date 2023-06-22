'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsShowModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

console.log(btnsShowModal);

for (let i = 0; i < btnsShowModal.length; i++) {
  console.log(btnsShowModal[i].textContent);
}
