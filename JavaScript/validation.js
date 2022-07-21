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

const changables1 = [fullName,firstEmail,text1];
const changables2 = [fName,lName,secEmail,text2];

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


const savedData = window.localStorage.getItem('Data2');
const parseData = savedData ? JSON.parse(savedData) : false;

if(parseData){
  fName.value = parseData["First-name"];
  lName.value = parseData["Last-name"];
  secEmail.value = parseData.email;
  text2.value = parseData.message;
}

const stordData2 = parseData || {};

changables2.forEach(ele=>{
  ele.addEventListener('input',(event)=>{
    const {id,value}= event.target;
    stordData2[id] = value;
    const data2 = JSON.stringify(stordData2);
    window.localStorage.setItem('Data2',data2);
  })
})



