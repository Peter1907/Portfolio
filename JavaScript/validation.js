const forms = document.querySelectorAll('form');
const firstEmail = forms[0].elements[1];
const secEmail = forms[1].elements[2];
const firstBtn = forms[0].elements[3];
const secBtn = forms[1].elements[4];
const btns = [firstBtn, secBtn];
const emails = [firstEmail, secEmail];
const msgs = document.querySelectorAll('small');

btns.forEach((ele, i) => {
  ele.addEventListener('click', (event) => {
    const {value} = emails[i];
    const lowerCase = value.toLowerCase();
    if (value !== lowerCase) {
      event.preventDefault();
      msgs[i].textContent = 'Please use only lower-case letters in the email field';
    }
  });
});