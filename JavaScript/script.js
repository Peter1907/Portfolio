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
    header: 'PMDB',
    list: ['React', 'Redux', 'JavaScript', 'CSS'],
    img: './media/projects/s01.jpg',
    popupImg: './media/projects/s01i.png',
    popText: `<p>I'm really proud to say that I've built the desktop version of this website in just under 5 days. It's built as a single-page-application. I've added the mobile version, been making some adjustments & been adding some features since. You can also check the GitHub repository for more technichal info</p>
    <p>Don't hesitate to contact me regarding any comments, improvements or just a coffee chat! I'd love to.</p>`,
    text: `<p>This is the most complicated project I've worked on so far. Built with (React, Redux, JavaScript, CSS, Webpack, and Netlify for deployment). This project utilizes the IMDB's API to get & display everything dynamically.</p></br>
    <p>NOTE: The server might not be stable so try to refresh the page. Thank you for checking</p>`,
    srcCode: 'https://github.com/Peter1907/PMDB',
    liveDemo: 'https://pmdb-media.netlify.app/',
  },
  {
    Id: 1,
    header: 'TV House',
    list: ['JavaScript', 'CSS', 'Webpack'],
    img: './media/projects/TV01s.jpg',
    popupImg: './media/projects/TV01.jpg',
    popText: `<p>This is a group project I built with one partner. I worked on the pop-ups and the styling of the project, while he was working on the main page displaying the items</p>
    <p>Using two different RESTful APIs. One to get the info & display it & the other for saving the interactions the user can have (Likes, comments & reservations). You can also check the GitHub repository for more technichal info.</p>`,
    text: 'A desktop website built using vanilla JavaScript, HTML, CSS & Webpack to get movies\' data from an API & displaying it. Also providing an interactive UI for likes, comments & reservations using another API.',
    srcCode: 'https://github.com/Peter1907/TV-House-JS',
    liveDemo: 'https://dhuruvsingh.github.io/CapstoneJS/',
  },
  {
    Id: 2,
    header: 'Rock Paper Scissors',
    list: ['React', 'Redux', 'CSS'],
    img: './media/projects/RPSs.jpg',
    popupImg: './media/projects/RPS.jpg',
    popText: `<p>This is a project I built to practice my React/Redux skills. I've built it using React, Redux, CSS & Webpack. You can also check the GitHub repository for more technichal info.</p>
    <p>The initial design was provided by "<a href="https://www.frontendmentor.io/" target="_blank" rel="noopener">Frontend Mentor</a>"</p>`,
    text: 'A game that I built as an excersice for using React & Rdeux. It has a responsive design so that it would work on any device.',
    srcCode: 'https://github.com/Peter1907/rock-paper-scissors',
    liveDemo: 'https://pb-rpsls-game.netlify.app/',
  },
  {
    Id: 3,
    header: 'Bookstore',
    list: ['React', 'Redux', 'CSS'],
    img: './media/projects/BSs.jpg',
    popupImg: './media/projects/BS.jpg',
    popText: `<p>Adding & removing books is done instantly using React's rerendering, instead of waiting for the API to respond.</p><p>This project has a responsive design that can work & look good on all devices.</p>
    <p>Features like comments & updating progress can be added.</p>`,
    text: 'This project is a "Book Store" app using React with redux. The app has features like adding & removeing books using an API.',
    srcCode: 'https://github.com/Peter1907/book-store',
    liveDemo: 'https://pb-book-store.netlify.app/',
  },
  {
    Id: 4,
    header: 'Global Soccer Summit',
    list: ['HTML', 'CSS', 'JavaScript'],
    img: './media/projects/GSSs.jpg',
    popupImg: './media/projects/GSS.jpg',
    popText: `<p>This Project was more focused on using vanilla JavaScript using event listeners & dynamic rendering</p>
    <p>I was using a template provided for the design to make it pixel perfec. It also has a responsive design that can work & look good on all devices.</p>`,
    text: 'A web project mainly with JavaScript. Also I used my designing skills to add a few touches here & there.',
    srcCode: 'https://github.com/Peter1907/capstone01',
    liveDemo: 'https://peter1907.github.io/capstone01/',
  },
  {
    Id: 5,
    header: 'Math Magicians',
    list: ['React', 'CSS', 'JavaScript'],
    img: './media/projects/MMs.jpg',
    popupImg: './media/projects/MM.jpg',
    popText: `<p>This project was built using React & JavaScript. Making reusable functional based components, integrating the logic for calculations & Using React hooks.</p>
    <p>I also used an API to generate & render a random math-related quote.</p>`,
    text: 'A desktop website built using React, JavaScript, HTML & CSS. It features a simple calculator & a random math quote generator.',
    srcCode: 'https://github.com/Peter1907/math-magicians',
    liveDemo: 'https://papaya-mermaid-965475.netlify.app/',
  },
  {
    Id: 6,
    header: 'D3 Chart',
    list: ['HTML', 'CSS', 'JavaScript', 'D3'],
    img: './media/projects/D3s.jpg',
    popupImg: './media/projects/D3.jpg',
    popText: 'This is a project built as an exercise for using D3.js library. project data & tests was provided by freecodecamp',
    text: 'A simple web page containing a chart built using D3.js library & raw data from an API',
    srcCode: 'https://github.com/Peter1907/d3-bar-chart',
    liveDemo: 'https://peter1907.github.io/d3-bar-chart/',
  },
];

const projectsHtml = document.getElementById('works');
projectsHtml.innerHTML
+= '<div id="projects-grid">'
+ '<div class="card-1 dynamic">'
+ '<img id="card-1-img" src="#" alt="project screenshot"></img>'
+ '<div id="card-1-text">'
+ '<h2></h2>'
+ '<p></p>'
+ '<ul></ul>'
+ '<button class="pop" type="button">See Project</button>'
+ '</div>'
+ '</div>'
+ '<div class="repeated-card one dynamic">'
+ '<img src="" alt="">'
+ '<h2></h2>'
+ '<p></p>'
+ '<ul></ul>'
+ '<button class="pop" type="button">See Project</button>'
+ '</div>'
+ '<div class="repeated-card two dynamic">'
+ '<img src="" alt="">'
+ '<h2></h2>'
+ '<p></p>'
+ '<ul></ul>'
+ '<button class="pop" type="button">See Project</button>'
+ '</div>'
+ '<div class="repeated-card three dynamic">'
+ '<img src="" alt="">'
+ '<h2></h2>'
+ '<p></p>'
+ '<ul></ul>'
+ '<button class="pop" type="button">See Project</button>'
+ '</div>'
+ '<div class="repeated-card four dynamic">'
+ '<img src="" alt="">'
+ '<h2></h2>'
+ '<p></p>'
+ '<ul></ul>'
+ '<button class="pop" type="button">See Project</button>'
+ '</div>'
+ '<div class="repeated-card five dynamic">'
+ '<img src="" alt="">'
+ '<h2></h2>'
+ '<p></p>'
+ '<ul></ul>'
+ '<button class="pop" type="button">See Project</button>'
+ '</div>'
+ '<div class="repeated-card six dynamic">'
+ '<img src="" alt="">'
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
  ele.querySelector('p').innerHTML = Data.text;
  ele.querySelector('img').src = Data.img;
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
  document.querySelector('body').style.overflow = 'auto';
  popUp.classList.toggle('hidden');
});

const seeProjectBtn = document.querySelectorAll('.pop');
seeProjectBtn.forEach((btn, Id) => {
  btn.addEventListener('click', () => {
    const data = cards[Id];
    document.querySelector('#pop-up-head > h2').textContent = data.header;
    document.querySelector('#pop-up-body > img').src = data.popupImg;
    document.querySelector('#pop-up-text p').innerHTML = data.popText;
    document.querySelector('#demo').href = data.liveDemo;
    document.querySelector('#src').href = data.srcCode;

    items.innerHTML = '';
    data.list.forEach((ele) => {
      const item = document.createElement('li');
      item.textContent = ele;
      items.appendChild(item);
    });

    overlay.classList.toggle('hidden');
    document.querySelector('body').style.overflow = 'hidden';
    popUp.classList.toggle('hidden');
  });
});

const mailIcon = document.querySelector('.desktop-links > li > img');
const msg = document.querySelector('.anon-msg');
const dismissBtn = document.querySelector('.dismiss');

overlay.addEventListener('click', () => {
  overlay.classList.toggle('hidden');
  document.querySelector('body').style.overflow = 'auto';
  popUp.classList.add('hidden');
  msg.style.transform = 'scale(0)';
  msg.style.right = '20%';
  msg.style.top = '3%';
});

msg.style.position = 'absolute';
msg.style.right = '20%';
msg.style.top = '3%';

mailIcon.addEventListener('click', () => {
  msg.style.position = 'fixed';
  msg.style.right = '50%';
  msg.style.top = '50%';
  msg.style.transform = 'scale(1)';
  msg.style.transform = 'translate(50%, -50%)';
  overlay.classList.toggle('hidden');
  document.querySelector('body').style.overflow = 'hidden';
});

dismissBtn.addEventListener('click', () => {
  overlay.classList.toggle('hidden');
  document.querySelector('body').style.overflow = 'auto';
  msg.style.transform = 'scale(0)';
  msg.style.right = '20%';
  msg.style.top = '3%';
});