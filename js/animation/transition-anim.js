// const animTexts = document.querySelectorAll('._anim-skills-header');

// if (animTexts.length > 0) {
//   window.addEventListener('scroll', animOnScroll);
//   function animOnScroll() {
//     for (let index = 0; index < animTexts.length; index++) {
//       const animText = animTexts[index];
//       const animTextHeight = animText.offsetHeight;
//       const animTextOffset = offset(animText).top;
//       const animStart = 4;

//       let animTextPoint = window.innerHeight - animTextHeight / animStart;
//       if (animTextHeight > window.innerHeight) {
//         animTextPoint = window.innerHeight - window.innerHeight / animStart;
//       }

//       if (
//         pageYOffset > animTextOffset - animTextPoint &&
//         pageYOffset < animTextOffset + animTextHeight
//       ) {
//         animText.classList.add('_active');
//       } else {
//         animText.classList.remove('_active');
//       }
//     }
//   }
//   function offset(el) {
//     const rect = el.getBoundingClientRect(),
//       scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
//     scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
//   }

//   setTimeout(() => {
//     animOnScroll();
//   }, 300);
// }


// const animSkillOnes = document.querySelectorAll('._anim-skill-1');

// if (animSkillOnes.length > 0) {
//   window.addEventListener('scroll', animOnScroll);
//   function animOnScroll() {
//     for (let index = 0; index < animSkillOnes.length; index++) {
//       const animSkillOne = animSkillOnes[index];
//       const animSkillOneHeight = animSkillOne.offsetHeight;
//       const animSkillOneOffset = offset(animSkillOne).top;
//       const animStart = 4;

//       let animSkillOnePoint =
//         window.innerHeight - animSkillOneHeight / animStart;
//       if (animSkillOneHeight > window.innerHeight) {
//         animSkillOnePoint = window.innerHeight - window.innerHeight / animStart;
//       }

//       if (
//         pageYOffset > animSkillOneOffset - animSkillOnePoint &&
//         pageYOffset < animSkillOneOffset + animSkillOneHeight
//       ) {
//         animSkillOne.classList.add('_active');
//       } else {
//         animSkillOne.classList.remove('_active');
//       }
//     }
//   }
//   function offset(el) {
//     const rect = el.getBoundingClientRect(),
//       scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
//     scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
//   }

//   setTimeout(() => {
//     animOnScroll();
//   }, 400);
// }

// const animSkillTwos = document.querySelectorAll('._anim-skill-2');

// if (animSkillTwos.length > 0) {
//   window.addEventListener('scroll', animOnScroll);
//   function animOnScroll() {
//     for (let index = 0; index < animSkillTwos.length; index++) {
//       const animSkillTwo = animSkillTwos[index];
//       const animSkillTwoHeight = animSkillTwo.offsetHeight;
//       const animSkillTwoOffset = offset(animSkillTwo).top;
//       const animStart = 4;

//       let animSkillTwoPoint =
//         window.innerHeight - animSkillTwoHeight / animStart;
//       if (animSkillTwoHeight > window.innerHeight) {
//         animSkillTwoPoint = window.innerHeight - window.innerHeight / animStart;
//       }

//       if (
//         pageYOffset > animSkillTwoOffset - animSkillTwoPoint &&
//         pageYOffset < animSkillTwoOffset + animSkillTwoHeight
//       ) {
//         animSkillTwo.classList.add('_active');
//       } else {
//         animSkillTwo.classList.remove('_active');
//       }
//     }
//   }
//   function offset(el) {
//     const rect = el.getBoundingClientRect(),
//       scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
//     scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
//   }

//   setTimeout(() => {
//     animOnScroll();
//   }, 500);
// }


// const animSkillThrees = document.querySelectorAll('._anim-skill-3');

// if (animSkillThrees.length > 0) {
//   window.addEventListener('scroll', animOnScroll);
//   function animOnScroll() {
//     for (let index = 0; index < animSkillThrees.length; index++) {
//       const animSkillThree = animSkillThrees[index];
//       const animSkillThreeHeight = animSkillThree.offsetHeight;
//       const animSkillThreeOffset = offset(animSkillThree).top;
//       const animStart = 4;

//       let animSkillThreePoint =
//         window.innerHeight - animSkillThreeHeight / animStart;
//       if (animSkillThreeHeight > window.innerHeight) {
//         animSkillThreePoint = window.innerHeight - window.innerHeight / animStart;
//       }

//       if (
//         pageYOffset > animSkillThreeOffset - animSkillThreePoint &&
//         pageYOffset < animSkillThreeOffset + animSkillThreeHeight
//       ) {
//         animSkillThree.classList.add('_active');
//       } else {
//         animSkillThree.classList.remove('_active');
//       }
//     }
//   }
//   function offset(el) {
//     const rect = el.getBoundingClientRect(),
//       scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
//     scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
//   }

//   setTimeout(() => {
//     animOnScroll();
//   }, 600);
// }


// const animSkillFours = document.querySelectorAll('._anim-skill-4');

// if (animSkillFours.length > 0) {
//   window.addEventListener('scroll', animOnScroll);
//   function animOnScroll() {
//     for (let index = 0; index < animSkillFours.length; index++) {
//       const animSkillFour = animSkillFours[index];
//       const animSkillFourHeight = animSkillFour.offsetHeight;
//       const animSkillFourOffset = offset(animSkillFour).top;
//       const animStart = 4;

//       let animSkillFourPoint =
//         window.innerHeight - animSkillFourHeight / animStart;
//       if (animSkillFourHeight > window.innerHeight) {
//         animSkillFourPoint = window.innerHeight - window.innerHeight / animStart;
//       }

//       if (
//         pageYOffset > animSkillFourOffset - animSkillFourPoint &&
//         pageYOffset < animSkillFourOffset + animSkillFourHeight
//       ) {
//         animSkillFour.classList.add('_active');
//       } else {
//         animSkillFour.classList.remove('_active');
//       }
//     }
//   }
//   function offset(el) {
//     const rect = el.getBoundingClientRect(),
//       scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
//     scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
//   }

//   setTimeout(() => {
//     animOnScroll();
//   }, 700);
// }


// const animSkillFives = document.querySelectorAll('._anim-skill-5');

// if (animSkillFives.length > 0) {
//   window.addEventListener('scroll', animOnScroll);
//   function animOnScroll() {
//     for (let index = 0; index < animSkillFives.length; index++) {
//       const animSkillFive = animSkillFives[index];
//       const animSkillFiveHeight = animSkillFive.offsetHeight;
//       const animSkillFiveOffset = offset(animSkillFive).top;
//       const animStart = 4;

//       let animSkillFivePoint =
//         window.innerHeight - animSkillFiveHeight / animStart;
//       if (animSkillFiveHeight > window.innerHeight) {
//         animSkillFivePoint = window.innerHeight - window.innerHeight / animStart;
//       }

//       if (
//         pageYOffset > animSkillFiveOffset - animSkillFivePoint &&
//         pageYOffset < animSkillFiveOffset + animSkillFiveHeight
//       ) {
//         animSkillFive.classList.add('_active');
//       } else {
//         animSkillFive.classList.remove('_active');
//       }
//     }
//   }
//   function offset(el) {
//     const rect = el.getBoundingClientRect(),
//       scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
//     scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
//   }

//   setTimeout(() => {
//     animOnScroll();
//   }, 800);
// }


// const animSkillSixes = document.querySelectorAll('._anim-skill-6');

// if (animSkillSixes.length > 0) {
//   window.addEventListener('scroll', animOnScroll);
//   function animOnScroll() {
//     for (let index = 0; index < animSkillSixes.length; index++) {
//       const animSkillSix = animSkillSixes[index];
//       const animSkillSixHeight = animSkillSix.offsetHeight;
//       const animSkillSixOffset = offset(animSkillSix).top;
//       const animStart = 4;

//       let animSkillSixPoint =
//         window.innerHeight - animSkillSixHeight / animStart;
//       if (animSkillSixHeight > window.innerHeight) {
//         animSkillSixPoint = window.innerHeight - window.innerHeight / animStart;
//       }

//       if (
//         pageYOffset > animSkillSixOffset - animSkillSixPoint &&
//         pageYOffset < animSkillSixOffset + animSkillSixHeight
//       ) {
//         animSkillSix.classList.add('_active');
//       } else {
//         animSkillSix.classList.remove('_active');
//       }
//     }
//   }
//   function offset(el) {
//     const rect = el.getBoundingClientRect(),
//       scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
//     scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
//   }

//   setTimeout(() => {
//     animOnScroll();
//   }, 900);
// }



// // УСЛУГИ 

// const animOneCards = document.querySelectorAll('._anim-card-1');

// if (animOneCards.length > 0) {
//   window.addEventListener('scroll', animOnScroll);
//   function animOnScroll() {
//     for (let index = 0; index < animOneCards.length; index++) {
//       const animOneCard = animOneCards[index];
//       const animOneCardHeight = animOneCard.offsetHeight;
//       const animOneCardOffset = offset(animOneCard).top;
//       const animStart = 4;

//       let animOneCardPoint = window.innerHeight - animOneCardHeight / animStart;
//       if (animOneCardHeight > window.innerHeight) {
//         animOneCardPoint = window.innerHeight - window.innerHeight / animStart;
//       }

//       if (
//         pageYOffset > animOneCardOffset - animOneCardPoint &&
//         pageYOffset < animOneCardOffset + animOneCardHeight
//       ) {
//         animOneCard.classList.add('_active');
//       } else {
//         animOneCard.classList.remove('_active');
//       }
//     }
//   }
//   function offset(el) {
//     const rect = el.getBoundingClientRect(),
//       scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
//     scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
//   }

//   setTimeout(() => {
//     animOnScroll();
//   }, 500);
// }

// const animTwoCards = document.querySelectorAll('._anim-card-2');

// if (animTwoCards.length > 0) {
//   window.addEventListener('scroll', animOnScroll);
//   function animOnScroll() {
//     for (let index = 0; index < animTwoCards.length; index++) {
//       const animTwoCard = animTwoCards[index];
//       const animTwoCardHeight = animTwoCard.offsetHeight;
//       const animTwoCardOffset = offset(animTwoCard).top;
//       const animStart = 4;

//       let animTwoCardPoint = window.innerHeight - animTwoCardHeight / animStart;
//       if (animTwoCardHeight > window.innerHeight) {
//         animTwoCardPoint = window.innerHeight - window.innerHeight / animStart;
//       }

//       if (
//         pageYOffset > animTwoCardOffset - animTwoCardPoint &&
//         pageYOffset < animTwoCardOffset + animTwoCardHeight
//       ) {
//         animTwoCard.classList.add('_active');
//       } else {
//         animTwoCard.classList.remove('_active');
//       }
//     }
//   }
//   function offset(el) {
//     const rect = el.getBoundingClientRect(),
//       scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
//     scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
//   }

//   setTimeout(() => {
//     animOnScroll();
//   }, 600);
// }

// const animThreeCards = document.querySelectorAll('._anim-card-3');

// if (animThreeCards.length > 0) {
//   window.addEventListener('scroll', animOnScroll);
//   function animOnScroll() {
//     for (let index = 0; index < animThreeCards.length; index++) {
//       const animThreeCard = animThreeCards[index];
//       const animThreeCardHeight = animThreeCard.offsetHeight;
//       const animThreeCardOffset = offset(animThreeCard).top;
//       const animStart = 4;

//       let animThreeCardPoint =
//         window.innerHeight - animThreeCardHeight / animStart;
//       if (animThreeCardHeight > window.innerHeight) {
//         animThreeCardPoint =
//           window.innerHeight - window.innerHeight / animStart;
//       }

//       if (
//         pageYOffset > animThreeCardOffset - animThreeCardPoint &&
//         pageYOffset < animThreeCardOffset + animThreeCardHeight
//       ) {
//         animThreeCard.classList.add('_active');
//       } else {
//         animThreeCard.classList.remove('_active');
//       }
//     }
//   }
//   function offset(el) {
//     const rect = el.getBoundingClientRect(),
//       scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
//     scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
//   }

//   setTimeout(() => {
//     animOnScroll();
//   }, 700);
// }


const animTexts = document.querySelectorAll('._anim-text');

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
  }, 300);
}