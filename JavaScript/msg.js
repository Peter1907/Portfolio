const mailIcon = document.querySelector('.desktop-links > li > img');
const msg = document.querySelector('.anon-msg');
const dismissBtn = document.querySelector('.dismiss');

msg.style.position = 'absolute';
msg.style.left = mailIcon.offsetLeft + 8 + 'px';
msg.style.top = mailIcon.offsetHeight + 4 + 'px';

mailIcon.addEventListener('click', () => {
  msg.style.position = 'fixed';
  msg.style.left = '50%';
  msg.style.top = '50%';
  msg.style.scale = '1';
  msg.style.transform = 'translate(-50%, -50%)';
  overlay.classList.toggle('hidden');
  document.querySelector('body').style.overflow = 'hidden';
});

dismissBtn.addEventListener('click', () => {
  overlay.classList.toggle('hidden');
  document.querySelector('body').style.overflow = 'auto';
  msg.style.scale = '0';
  msg.style.left = mailIcon.offsetLeft + 8 + 'px';
  msg.style.top = mailIcon.offsetHeight + 4 + 'px';
});