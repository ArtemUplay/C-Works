const feedbackForm = document.querySelector('.feedback__form');
const footerForm = document.querySelector('.footer__form');
const feedbackButton = feedbackForm.querySelector('.form__button');
const footerButton = footerForm.querySelector('.form__button');
const feebackField = feedbackForm.querySelector('.form__field');
const footerField = footerForm.querySelector('.form__field');

feedbackButton.addEventListener('click', () => {
  feedbackForm.addEventListener('submit', (evt) => evt.preventDefault());

  if (feebackField.checkValidity()) {
    feedbackButton.innerHTML = `Круто, спасибо за доверие!`;
  }
})

footerButton.addEventListener('click', () => {
  footerForm.addEventListener('submit', (evt) => evt.preventDefault());

  if (footerField.checkValidity()) {
    footerButton.innerHTML = `Круто, спасибо за доверие!`;
  }
})

