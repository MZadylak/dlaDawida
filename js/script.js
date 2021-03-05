const arrows = document.querySelectorAll('.fa-chevron-right');
const bulletsText = document.querySelectorAll('.bullets__text');


for(let i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener('click', () => {
              if(!arrows[i].classList.contains('active')) {
                  arrows[i].classList.add('active');
                bulletsText[i].classList.add('active');
              } else {
                  arrows[i].classList.remove('active');
              bulletsText[i].classList.remove('active');
  
              }
          })
      }