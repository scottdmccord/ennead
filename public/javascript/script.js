console.log('hello');

let logo = document.querySelector('.logo');
let welcomeModal = document.querySelector('.landing-modal');
logo.addEventListener('click', () => {
  console.log('hello');
  welcomeModal.style.display = 'none';
});
