const menuToggle = document.querySelector('.menu-toggle');
const sideMenu = document.getElementById('side-menu');

menuToggle.addEventListener('click', () => {
  sideMenu.classList.toggle('show');
});
