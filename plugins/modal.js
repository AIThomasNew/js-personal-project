function _createModal(options) {
  const modal = document.createElement('div');
  modal.classList.add('modal-block');
  modal.insertAdjacentHTML(
    'afterbegin',
    `<div class="modal-wrap">
  <div class="modal-window">
    <div class="modal-header">
      <span class="modal-title">Регистрация</span>
      <span class="modal-close">&times</span>
    </div>
    <div class="modal-body">
      <p>Логин: <input type="text"></p>
      <p>Пароль: <input type="text"> <input type="checkbox"> </p>
    </div>
    <div class="modal-footer">
      <button>Oк</button>
      <button>Отмена</button>
    </div>
  </div>
</div>`
  );
  return modal;
}

$.modal = function (options) {
  const $modal = _createModal(options);

  return {
    open() {},
    close() {},
    destroy() {},
  };
};
