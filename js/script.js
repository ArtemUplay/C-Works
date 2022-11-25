const feedbackForm = document.querySelector('.feedback__form');
const feedbackField = document.querySelector('.feedback__field');
const feedbackButton = document.querySelector('.feedback__button');

// Отменяем стандартную отправку формы
feedbackForm.addEventListener('submit', (evt) => {
  if (feedbackField.value == '') {
    evt.preventDefault();
  }

  if (feedbackField.value !== "") {
    feedbackButton.classList.add('feedback__button_show_new-text');
    feedbackButton.innerHTML = `Круто, спасибо за доверие!`;
  }
})
