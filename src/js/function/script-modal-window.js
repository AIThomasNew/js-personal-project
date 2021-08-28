const modal = $.modal();

const login = document.querySelector('.menu__btn-order');
login.addEventListener('click', fn);

function fn() {
  return modal.open();
}

const modalClose = document.querySelector('.modal-close');
modalClose.addEventListener('click', foo);

function foo() {
  return modal.close();
}