$(document).ready(function() {
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
});


