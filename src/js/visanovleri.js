import '../scss/visanovleri.scss';

$(function() {
  var toggle = false;

  $('.left1').click(function() {
    toggle = !toggle;
    if (toggle) {
      $(this).addClass('selectedVisa');
      $('.right1').removeClass('selectedVisa');

      $('.right').hide();
      $('.left').fadeIn();
    } else {
      $(this).removeClass('selectedVisa');
      $('.right').hide();
      $('.left').fadeOut();
    }
  });

  // $('.right1').click(function() {
  //     $(this).addClass('selectedVisa');
  //     $(".left1").removeClass("selectedVisa");

  //     $(".left").hide()
  //     $(".right").fadeIn()
  // });
});
