const animTexts = document.querySelectorAll('._anim_text');

if (animTexts.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animTexts.length; index++) {
      const animText = animTexts[index];
      const animTextHeight = animText.offsetHeight;
      const animTextOffset = offset(animText).top;
      const animStart = 4;

      let animTextPoint = window.innerHeight - animTextHeight / animStart;
      if (animTextHeight > window.innerHeight) {
        animTextPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        pageYOffset > animTextOffset - animTextPoint &&
        pageYOffset < animTextOffset + animTextHeight
      ) {
        animText.classList.add('_active');
      } else {
        animText.classList.remove('_active');
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }

  setTimeout(() => {
    animOnScroll();
  }, 700);
}
