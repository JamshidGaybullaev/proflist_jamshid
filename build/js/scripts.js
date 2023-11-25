// Custom Scripts
// Custom scripts
const modalBtn1 = document.querySelector('#modal1-btn');
const modal1 = document.querySelector('#modal1');
const modalBtn2 = document.querySelector('#modal2-btn');
const modal2 = document.querySelector('#modal2');
const close = document.querySelectorAll('.order-close');
const body = document.querySelector('body');




close.forEach(function (closeBtn) {
    closeBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        modal1.classList.remove('active');
        modal2.classList.remove('active');
        body.classList.remove('active');
    });
});



modalBtn1.addEventListener('click', function (e) {
    e.stopPropagation();
    modal1.classList.add('active');
    body.classList.add('active');
});

modalBtn2.addEventListener('click', function (e) {
    e.stopPropagation();
    modal2.classList.add('active');
    body.classList.add('active');
});


document.body.addEventListener('click', function (e) {
    if (body.classList.contains('active') && !modal1.contains(e.target) && !modal2.contains(e.target)) {
        modal1.classList.remove('active');
        modal2.classList.remove('active');
        body.classList.remove('active');
    }
});










// Мобильное меню бургер
function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.menu')
    const body = document.querySelector('body')
    burger.addEventListener('click', () => {
        if (!menu.classList.contains('active')) {
            menu.classList.add('active')
            burger.classList.add('active-burger')
            body.classList.add('locked')
        } else {
            menu.classList.remove('active')
            burger.classList.remove('active-burger')
            body.classList.remove('locked')
        }
    })
    menu.addEventListener("click", (event) => {
        if (event.target) {
            menu.classList.remove('active')
            burger.classList.remove('active-burger')
            body.classList.remove('locked')
        }
    })
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
        if (window.innerWidth > 991.98) {
            menu.classList.remove('active')
            burger.classList.remove('active-burger')
            body.classList.remove('locked')
        }
    })
}
burgerMenu()


// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
    const nav = document.querySelector('nav')

    // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
    const breakpoint = 1
    if (window.scrollY >= breakpoint) {
        nav.classList.add('fixed__nav')
    } else {
        nav.classList.remove('fixed__nav')
    }
}
window.addEventListener('scroll', fixedNav)



// SWIPER

const swiper = new Swiper('.card__swiper', {
  
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 20,
    
    breakpoints: {
      1450: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      }
    }
  });


  const swiper2 = new Swiper('.card__swiper2', {
  
  
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  
    
    // grabCursor: true,
    slidesPerView: 3 ,
    spaceBetween: 10,
    
    breakpoints: {
      1450: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      }
    }, 
    thumbs: {
        swiper: swiper,
      },

    
  });

  // const swiper3 = new Swiper('.hero__swiper', {
  
  //   pagination: {
  //     el: '.swiper-pagination',
  //   },
  
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  
  //   initialSlide: 3,
  //   centeredSlides: true,
  //   grabCursor: true,
  //   slidesPerView: 1,
  //   spaceBetween: 20,
    
  //   breakpoints: {
  //     1450: {
  //       slidesPerView: 4,
  //       spaceBetween: 30,
  //     },
  //     992: {
  //       slidesPerView: 3,
  //     },
  //     768: {
  //       slidesPerView: 2,
  //     }
  //   }
  // });

  const swiper4 = new Swiper('.sertificate__swiper', {
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 10,
    
    breakpoints: {
      1200: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      }
    }
  });




  const swiper5 = new Swiper('.hero__swiper', {
  
    pagination: {
      el: '.swiper-pagination',
    },

    // loop: true,
  
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  
    autoplay: {
      delay: 1000,
    },

    grabCursor: false,
    slidesPerView: 1,
    spaceBetween: 10,
    
    breakpoints: {
      1450: {
        slidesPerView: 1,
        // spaceBetween: 10,
      },
      992: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      }
    }
  });



