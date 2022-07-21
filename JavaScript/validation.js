const forms = document.querySelectorAll('form');
const firstEmail = forms[0].elements[1];
const fullName = forms[0].elements[0];
const secEmail = forms[1].elements[2];
const fName = forms[1].elements[0];
const lName = forms[1].elements[1];
const firstBtn = forms[0].elements[3];
const secBtn = forms[1].elements[4];
const text1 = forms[0].elements[2];
const text2 = forms[1].elements[3];
const btns = [firstBtn, secBtn];
const emails = [firstEmail, secEmail];

const changables1 = [fullName, firstEmail, text1];
const changables2 = [fName, lName, secEmail, text2];

const msgs = document.querySelectorAll('small');

btns.forEach((ele, i) => {
  ele.addEventListener('click', (event) => {
    const { value } = emails[i];
    const lowerCase = value.toLowerCase();
    if (value !== lowerCase) {
      event.preventDefault();
      msgs[i].textContent = 'Please use only lower-case letters in the email field';
    }
  });
});

const savedData1 = window.localStorage.getItem('Data1');
const parseData1 = savedData1 ? JSON.parse(savedData1) : false;
const storedData1 = parseData1 || {};

if (parseData1) {
  fullName.value = storedData1['Full-name'];
  firstEmail.value = storedData1.Email;
  text1.value = storedData1.Message;
}

changables1.forEach((ele) => {
  ele.addEventListener('input', (Event) => {
    const { id, value } = Event.target;
    storedData1[id] = value;
    const data1 = JSON.stringify(storedData1);
    window.localStorage.setItem('Data1', data1);
  });
});

const savedData2 = window.localStorage.getItem('Data2');
const parseData2 = savedData2 ? JSON.parse(savedData2) : false;
const storedData2 = parseData2 || {};

if (parseData2) {
  fName.value = parseData2['First-name'];
  lName.value = parseData2['Last-name'];
  secEmail.value = parseData2.email;
  text2.value = parseData2.message;
}

changables2.forEach((ele) => {
  ele.addEventListener('input', (event) => {
    const { id, value } = event.target;
    storedData2[id] = value;
    const data2 = JSON.stringify(storedData2);
    window.localStorage.setItem('Data2', data2);
  });
});
