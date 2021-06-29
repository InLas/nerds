const link = document.querySelector('.write-us-button');
const popup = document.querySelector('.modal');
const popupClose = popup.querySelector('.modal-close');
const userName = popup.querySelector('[name=user-name]');

link.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('modal-show');
  userName.focus();
});

popupClose.addEventListener('click', function () {
  popup.classList.remove('modal-show');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    popup.classList.remove('modal-show');
  }
});

$(document).ready(function () {
  $('.slider').slick({
    dots: true,
    arrows: false,
    draggable: false,
    speed: 0,
  });
});
