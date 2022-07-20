const menuIcon = document.getElementById('menu-button');
const close = document.getElementById('Close-btn');
const menu = document.getElementById('menu-container');
const item = document.querySelector('#menu-container ul');

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

close.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

item.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

const cards = [
  {
    Id: 0,
    header: 'Multi-Post Stories',
    list: ['css', 'html', 'bootstrap', 'Ruby'],
    img: './media/Img-Placeholder.jpg'
  },
  {
    Id: 1,
    header: 'Professional Art Printing Data',
    list: ['html', 'bootstrap', 'Ruby'],
    img: './media/Snapshoot.jpg'
  },
  {
    Id: 2,
    header: 'Data Dashboard Healthcare',
    list: ['html', 'bootstrap', 'Ruby'],
    img: './media/Snapshoot.jpg'
  },{
    Id: 3,
    header: 'Professional Art Printing Data',
    list: ['html', 'bootstrap', 'Ruby'],
    img: './media/Snapshoot.jpg'
  },{
    Id: 4,
    header: 'Professional Art Printing Data',
    list: ['html', 'bootstrap', 'Ruby'],
    img: './media/Snapshoot.jpg'
  },{
    Id: 5,
    header: 'Professional Art Printing Data',
    list: ['html', 'bootstrap', 'Ruby'],
    img: './media/Snapshoot.jpg'
  },{
    Id: 6,
    header: 'Professional Art Printing Data',
    list: ['html', 'bootstrap', 'Ruby'],
    img: './media/Snapshoot.jpg'
  }
]

const popUp = document.querySelector('.pop-up');
const closeSign = document.querySelector('#pop-up-head > span');
const overlay = document.querySelector('.overlay');
const items = document.querySelector('.pop-up > ul');
closeSign.addEventListener('click', () => {
  overlay.classList.toggle('hidden');
  popUp.classList.toggle('hidden');
});

const seeProjectBtn = Array.from(document.querySelectorAll('.pop'));
for (let i in seeProjectBtn) {
  seeProjectBtn[i].addEventListener('click', () => {
    const data = cards[i];
    document.querySelector('#pop-up-head > h2').textContent = data.header;
    document.querySelector('#pop-up-body > img').src = data.img;
    items.innerHTML = '';
    data.list.forEach(ele => {
      let item = document.createElement('li')
      item.textContent = ele;
      items.appendChild(item);

    })

    overlay.classList.toggle('hidden');
    popUp.classList.toggle('hidden');
  }) 
}

overlay.addEventListener('click', () => {
  overlay.classList.toggle('hidden');
  popUp.classList.toggle('hidden');
})
