const forms = document.querySelectorAll('.form');

forms[0].addEventListener('submit', (evt) => {
  addButtonNewText(evt, forms[0]);
})

forms[1].addEventListener('submit', (evt) => {
  addButtonNewText(evt, forms[1]);
})

function addButtonNewText(evt, form) {
  const formButton = form.querySelector('.form__button');

  evt.preventDefault();

  formButton.textContent = `Круто, спасибо за доверие!`;
}