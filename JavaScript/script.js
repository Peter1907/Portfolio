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
    img: './media/Img-Placeholder.jpg',
    popText: ' Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book .It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    srcCode: 'https://github.com/Peter1907/Portfolio',
    liveDemo: 'https://peter1907.github.io/Portfolio/',
  },
  {
    Id: 1,
    header: 'Professional Art Printing Data',
    list: ['html', 'bootstrap', 'Ruby'],
    img: './media/Snapshoot.jpg',
    popText: ' Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book .It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    srcCode: 'https://github.com/Peter1907/Portfolio',
    liveDemo: 'https://peter1907.github.io/Portfolio/',
  },
  {
    Id: 2,
    header: 'Data Dashboard Healthcare',
    list: ['html', 'bootstrap', 'Ruby'],
    img: './media/Snapshoot.jpg',
    popText: ' Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book .It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    srcCode: 'https://github.com/Peter1907/Portfolio',
    liveDemo: 'https://peter1907.github.io/Portfolio/',
  },
  {
    Id: 3,
    header: 'Website Protfolio',
    list: ['html', 'bootstrap', 'Ruby'],
    img: './media/Snapshoot.jpg',
    popText: ' Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book .It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    srcCode: 'https://github.com/Peter1907/Portfolio',
    liveDemo: 'https://peter1907.github.io/Portfolio/',
  },
  {
    Id: 4,
    header: 'Professional Art Printing Data',
    list: ['html', 'bootstrap', 'Ruby'],
    img: './media/Snapshoot.jpg',
    popText: ' Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book .It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    srcCode: 'https://github.com/Peter1907/Portfolio',
    liveDemo: 'https://peter1907.github.io/Portfolio/',
  },
  {
    Id: 5,
    header: 'Data Dashboard Healthcare',
    list: ['html', 'bootstrap', 'Ruby'],
    img: './media/Snapshoot.jpg',
    popText: ' Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book .It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    srcCode: 'https://github.com/Peter1907/Portfolio',
    liveDemo: 'https://peter1907.github.io/Portfolio/',
  },
  {
    Id: 6,
    header: 'Website Protfolio',
    list: ['html', 'bootstrap', 'Ruby'],
    img: './media/Snapshoot.jpg',
    popText: ' Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book .It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    srcCode: 'https://github.com/Peter1907/Portfolio',
    liveDemo: 'https://peter1907.github.io/Portfolio/',
  },
];

const projectsHtml = document.getElementById('works');
projectsHtml.innerHTML
+= '<div id="projects-grid">'
+ '<div class="card-1 dynamic">'
+ '<img id="card-1-img" src="#" alt="image containing a dancer"></img>'
+ '<div id="card-1-text">'
+ '<h2></h2>'
+ '<p></p>'
+ '<ul></ul>'
+ '<button class="pop" type="button">See Project</button>'
+ '</div>'
+ '</div>'
+ '<div class="repeated-card one dynamic">'
+ '<h2></h2>'
+ '<p></p>'
+ '<ul></ul>'
+ '<button class="pop" type="button">See Project</button>'
+ '</div>'
+ '<div class="repeated-card two dynamic">'
+ '<h2></h2>'
+ '<p></p>'
+ '<ul></ul>'
+ '<button class="pop" type="button">See Project</button>'
+ '</div>'
+ '<div class="repeated-card three dynamic">'
+ '<h2></h2>'
+ '<p></p>'
+ '<ul></ul>'
+ '<button class="pop" type="button">See Project</button>'
+ '</div>'
+ '<div class="repeated-card four dynamic">'
+ '<h2></h2>'
+ '<p></p>'
+ '<ul></ul>'
+ '<button class="pop" type="button">See Project</button>'
+ '</div>'
+ '<div class="repeated-card five dynamic">'
+ '<h2></h2>'
+ '<p></p>'
+ '<ul></ul>'
+ '<button class="pop" type="button">See Project</button>'
+ '</div>'
+ '<div class="repeated-card six dynamic">'
+ '<h2></h2>'
+ '<p></p>'
+ '<ul></ul>'
+ '<button class="pop" type="button">See Project</button>'
+ '</div>'
+ '</div>';

const projects = document.querySelectorAll('.dynamic');
projects[0].querySelector('img').src = cards[0].img;
projects.forEach((ele, Id) => {
  const Data = cards[Id];
  ele.querySelector('h2').textContent = Data.header;
  ele.querySelector('p').textContent = Data.text;
  const projectList = ele.querySelector('ul');
  Data.list.forEach((ele) => {
    const item = document.createElement('li');
    item.textContent = ele;
    projectList.appendChild(item);
  });
});

const popUp = document.querySelector('.pop-up');
const closeSign = document.querySelector('#pop-up-head > span');
const overlay = document.querySelector('.overlay');
const items = document.querySelector('.pop-up > ul');
closeSign.addEventListener('click', () => {
  overlay.classList.toggle('hidden');
  popUp.classList.toggle('hidden');
});

const seeProjectBtn = document.querySelectorAll('.pop');
seeProjectBtn.forEach((btn, Id) => {
  btn.addEventListener('click', () => {
    const data = cards[Id];
    document.querySelector('#pop-up-head > h2').textContent = data.header;
    document.querySelector('#pop-up-body > img').src = data.img;
    document.querySelector('#pop-up-text p').textContent = data.popText;
    document.querySelector('#demo').href = data.liveDemo;
    document.querySelector('#src').href = data.srcCode;

    items.innerHTML = '';
    data.list.forEach((ele) => {
      const item = document.createElement('li');
      item.textContent = ele;
      items.appendChild(item);
    });

    overlay.classList.toggle('hidden');
    popUp.classList.toggle('hidden');
  });
});

overlay.addEventListener('click', () => {
  overlay.classList.toggle('hidden');
  popUp.classList.toggle('hidden');
});
