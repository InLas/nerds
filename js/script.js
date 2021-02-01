var link = document.querySelector(".write-us-button");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal-close");
var UserName = popup.querySelector("[name=user-name]");


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  UserName.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

$(document).ready(function(){
  $('.slider').slick({
      dots: true,
      arrows: false,
      draggable: false,
      speed: 0,
  });
});