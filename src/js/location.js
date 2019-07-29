import '../scss/location.scss';

$(document).ready(function() {
  $('.location-slider1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: false,
    adaptiveHeight: true,
    draggable: false,
    asNavFor: '.location-text-slider',
  });

  $('.location-text-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    draggable: true,
    asNavFor: '.location-slider1',
    // focusOnSelect: true
  });
});
