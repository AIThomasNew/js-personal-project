export default function _createModal(options) {
  const modal = document.createElement('div');
  modal.classList.add('modal-block');
  modal.insertAdjacentHTML(
    'afterbegin',
    `<section class="modal-wrap">
    <div class="modal-window">
      <div class="contactInfo">
        <div>
          <h2></h2>
        </div>
      </div>
      <div class="modal-form">
        <div class="modal-header">
          <span class="modal-close"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg></span>
        </div>
        <div class="contactForm">
          <h2>Оформить заказ</h2>
          <div class="formBox">
            <div class="inputBox w50">
              <input type="text" required />
              <span>Имя</span>
            </div>
            <div class="inputBox w50">
              <input type="text" required />
              <span>Фамилия</span>
            </div>
            <div class="inputBox w50">
              <input type="email" required />
              <span>Email</span>
            </div>
            <div class="inputBox w50">
              <input type="text" required />
              <span>Номер телефона</span>
            </div>
            <div class="inputBox w100">
              <textarea></textarea>
              <span>Ваш комментарий...</span>
            </div>
            <div class="inputBox w100">
              <input id="submit-order" type="submit" value="Заказать" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`
  );
  document.body.appendChild(modal);
  return modal;
}

$.modal = function (options) {
  const $modal = _createModal(options);

  return {
    open() {
      $modal.classList.add('open');
    },
    close() {
      $modal.classList.remove('open');
    },
    destroy() {},
  };
};
