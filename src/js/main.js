$(document).ready(function() {

  // Mobile menu
  const overlay = document.querySelector('.overlay');
  const burger = $('.menu-toggle');
  const bodyEl = document.body;

  function resize() {
    const menu = $('header .header__inner .menu');
    const contacts = $('header .header__inner .menu .header__contacts')
    const header = $('header');
    const widthHead = header.width();

    if (widthHead < 1024) {
        menu.css({'display':'none'});
        contacts.css({'display':'block'});
        header.addClass('mobile');
    } else {
        menu.css({'display':'flex'});
        menu.css({'align-items':'center'});
        contacts.css({'display':'none'});
        header.removeClass('mobile');
    }
}

resize();

$(window).resize(function() {
    resize();
    if($(window).width() > 1023) {
      $(overlay).removeClass('active');
      $(burger).removeClass('active');
      $(bodyEl).removeClass('noscroll');
    }
});

burger.click(function(){
  if(this.classList.contains('active')){
      this.classList.remove('active');
      bodyEl.classList.remove('noscroll');
      overlay.classList.remove('active');
  }else{
      this.classList.add('active');
      bodyEl.classList.add('noscroll');
      overlay.classList.add('active');
  }

  element = $('.menu');
  display = element.css('display');
  if(display == 'none')
      $('.menu').slideDown(400);
  if(display == 'block')
      $('.menu').slideUp(400);
});

$('.menu a').click(function(){
  var header = $('header');
  var widthHead = header.width();
  if(widthHead < 1024)
      $('.menu').slideUp(400);
      $(overlay).removeClass('active');
      $(burger).removeClass('active');
      $(bodyEl).removeClass('noscroll');

});

$('.menu .header__btn').click(function(){
  var header = $('header');
  var widthHead = header.width();
  if(widthHead < 1024)
      $('.menu').slideUp(400);
      $(overlay).removeClass('active');
      $(burger).removeClass('active');
      $(bodyEl).removeClass('noscroll');
});



//   function showMenu() {
//     let loock = mobileMenu;
//     if (loock.style.maxHeight){
//     loock.style.maxHeight = null;
//     } else {
//         loock.style.maxHeight = loock.scrollHeight + "px";
//     }
// }


  // if (toggleMenu) {

  //    toggleMenu.addEventListener('click', function(){

  //     showMenu();

  //     if(this.classList.contains('active')){
  //         this.classList.remove('active');
  //         headerMob.classList.remove('active');
  //         overlay.classList.remove('active');
  //         bodyEl.classList.remove('noscroll');
  //     }else{
  //         this.classList.add('active');
  //         headerMob.classList.add('active');
  //         overlay.classList.add('active');
  //         bodyEl.classList.add('noscroll');
  //     }
  // });
  // }



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


