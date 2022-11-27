const feedbackForm = document.querySelector('.feedback__form');
const footerForm = document.querySelector('.footer__form');
const feedbackButtonForm = feedbackForm.querySelector('.form__button');
const footerButtonForm = footerForm.querySelector('.form__button');
const feebackFieldForm = feedbackForm.querySelector('.form__field');
const footerFieldForm = footerForm.querySelector('.form__field');

feedbackButtonForm.addEventListener('click', () => {
  feedbackForm.addEventListener('submit', (evt) => evt.preventDefault());

  if (feebackFieldForm.checkValidity()) {
    feedbackButtonForm.innerHTML = `Круто, спасибо за доверие!`;
  }
})

footerButtonForm.addEventListener('click', () => {
  footerForm.addEventListener('submit', (evt) => evt.preventDefault());

  if (footerFieldForm.checkValidity()) {
    footerButtonForm.innerHTML = `Круто, спасибо за доверие!`;
  }
})

