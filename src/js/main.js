$(document).ready(function() {

  // Mobile menu
  const overlay = document.querySelector('.overlay');
  const burger = $('.menu-toggle');
  const bodyEl = document.body;

  function removeActive() {
    $(overlay).removeClass('active');
    $(burger).removeClass('active');
    $(bodyEl).removeClass('noscroll');
}

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
    removeActive();
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
      removeActive();
});

$('.menu .header__btn').click(function(){
  var header = $('header');
  var widthHead = header.width();
  if(widthHead < 1024)
      $('.menu').slideUp(400);
      removeActive();
});

//MODAL

const modalFramesOpen = document.querySelectorAll('[data-modal-button]');
let modalFrames = document.querySelectorAll('[data-modal]');

if (modalFrames.length > 0) {
    const modalFramesClose = document.querySelectorAll('[data-modal-close]');

    for (let item of modalFramesOpen) {
        item.addEventListener('click', function (e) {
            for (let item of modalFrames) {

                item.classList.add('hidden');
                bodyEl.classList.remove('noscroll');
            }

            e.preventDefault();

            const itemAttr = item.getAttribute('data-modal-button');

            for (let frame of modalFrames) {
                const frameAttr = frame.getAttribute('data-modal');
                if (frameAttr === itemAttr) {
                    frame.classList.remove('hidden');
                    bodyEl.classList.add('noscroll');
                }
            }

        });
    }
    /*==  закрыть модалки  frame-modal по клику на кнопку ======*/
    for (let item of modalFramesClose) {

        item.addEventListener('click', function (e) {

            e.preventDefault();
            item.closest('[data-modal]').classList.add('hidden');
            bodyEl.classList.remove('noscroll');
        });
    }
    /*=============== закрыть модалки по клику вне ===============*/
    for (let frame of modalFrames) {

        const frameWin = frame.querySelector('.modal-window');
        frameWin.addEventListener('click', function (e) {
            if (e.target === e.currentTarget) {
                e.preventDefault();
                frame.classList.add('hidden');
                bodyEl.classList.remove('noscroll');
            }
        });
    }
};



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


