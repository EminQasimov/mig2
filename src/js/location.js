import '../scss/location.scss';

$(document).ready(function() {
  $('#location-img-slide-1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: false,
    adaptiveHeight: true,
    draggable: false,
    asNavFor: '#location-desc-slide-1',
  });

  $('#location-desc-slide-1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    draggable: true,
    asNavFor: '#location-img-slide-1',
    // focusOnSelect: true
  });

  $('#location-img-slide-2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: false,
    adaptiveHeight: true,
    draggable: false,
    asNavFor: '#location-desc-slide-2',
  });

  $('#location-desc-slide-2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    draggable: true,
    asNavFor: '#location-img-slide-2',
    // focusOnSelect: true
  });
});
