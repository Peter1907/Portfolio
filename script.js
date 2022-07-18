const menuIcon = document.getElementById('menu-button');
const close = document.getElementById('Close-btn');
const menu = document.getElementById('menu-container');

menuIcon.addEventListener('click', function () {
  menu.classList.toggle('hidden');
})

close.addEventListener('click', function () {
  menu.classList.toggle('hidden');
})