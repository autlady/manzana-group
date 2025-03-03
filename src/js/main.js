$(document).ready(function() {

  // Mobile menu
  const toggleMenu = document.querySelector('.menu-toggle');
  const headerMob = document.querySelector('.header-wrapper');
  const mobileMenu = document.querySelector('.header__content');
  const overlay = document.querySelector('.overlay');
  const bodyEl = document.body;

//   function showMenu() {
//     let loock = mobileMenu;
//     if (loock.style.maxHeight){
//     loock.style.maxHeight = null;
//     } else {
//         loock.style.maxHeight = loock.scrollHeight + "px";
//     }
// }


  if (toggleMenu) {
     /* клик по иконке гамбургер */
     toggleMenu.addEventListener('click', function(){

      // showMenu();

      if(this.classList.contains('active')){
          this.classList.remove('active');
          headerMob.classList.remove('active');
          overlay.classList.remove('active');
          bodyEl.classList.remove('noscroll');
      }else{
          this.classList.add('active');
          headerMob.classList.add('active');
          overlay.classList.add('active');
          bodyEl.classList.add('noscroll');
      }
  });
  }



  //partners-slider
  $('.partners-slider').slick({
    infinite: true,
    draggable: false,
    swipe: false,
		speed: 5000, // Чем больше, тем медленнее движение
		slidesToShow: 7,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 0, // Бесшовный эффект
		cssEase: 'linear', // Линейное движение
		pauseOnHover: false, // Не останавливать при наведении
		pauseOnFocus: false,
		variableWidth: true,
});

  function updateSlidesToShow() {
    let slider = $('.partners-slider');
    let sliderWidth = slider.width(); // Получаем ширину слайдера
    let slideWidth = slider.find('.slick-slide').outerWidth(true); // Получаем ширину одного слайда
    let slidesToShow = Math.floor(sliderWidth / slideWidth); // Рассчитываем количество
    slider.slick('slickSetOption', 'slidesToShow', slidesToShow > 0 ? slidesToShow : 1, true);
  }

  $(window).on('load resize', function() {
    updateSlidesToShow();
});

const showMore = document.getElementById('show-more');
const cardsRow = document.querySelector('.portfolio-box3');
showMore.addEventListener('click', () => {
  cardsRow.classList.add('is-visible');
  showMore.style.display = 'none';
})
});


