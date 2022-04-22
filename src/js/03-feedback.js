import throttle from 'lodash.throttle';

const refs = {
  mailInput: document.querySelector('[name="email"]'),
  textAreaMessage: document.querySelector('[name="message"]'),
  feedbackForm: document.querySelector('.feedback-form'),
  submitBtn: document.querySelector('button'),
};

if (localStorage.getItem('feedback-form-state') !== null) {
  const feedBackLocalStorageData = JSON.parse(localStorage.getItem('feedback-form-state'));

  refs.mailInput.value = feedBackLocalStorageData.email;
  refs.textAreaMessage.value = feedBackLocalStorageData.message;
}

refs.feedbackForm.addEventListener('input', throttle(onInputSaveLocalStorage, 500));

let inputInfo = {
  email: refs.mailInput.value,
  message: refs.textAreaMessage.value,
};

function onInputSaveLocalStorage(event) {
  if (event.target === refs.mailInput) {
    inputInfo.email = event.target.value;
  }

  if (event.target === refs.textAreaMessage) {
    inputInfo.message = event.target.value;
  }

  localStorage.setItem('feedback-form-state', JSON.stringify(inputInfo));
}

// console.log(localStorage.getItem('feedback-form-state'));

refs.submitBtn.addEventListener('click', onSubmitBtnClick);

function onSubmitBtnClick(event) {
  event.preventDefault();

  localStorage.removeItem('feedback-form-state');
  console.log(inputInfo);
  refs.mailInput.value = '';
  refs.textAreaMessage.value = '';
  inputInfo.email = '';
  inputInfo.message = '';
}
