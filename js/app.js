const modal = $.modal();

const btn = document.querySelector('#login');
btn.addEventListener('click', fn);

function fn() {
  return modal.open();
}

