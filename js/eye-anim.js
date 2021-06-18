// Относительно документа



function eyeball() {
  const eyeAnim = document.querySelectorAll('.eyeAnim');
  eyeAnim.forEach(function (eyeAnim) {
    let x = eyeAnim.getBoundingClientRect().left + eyeAnim.clientWidth / 2;
    let y = eyeAnim.getBoundingClientRect().top + eyeAnim.clientHeight / 2;

    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    let rotation = radian * (180 / Math.PI) * -1 + 270;

    eyeAnim.style.transform = 'rotate(' + rotation + 'deg)';
  });
}
