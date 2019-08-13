import '../scss/qeydiyyat.scss';

$(function() {
  var width = $('.out').width();
  $('.out').height(width);
  window.onresize = function() {
    var width = $('.out').width();
    $('.out').height(width);
  };
  $('.out').click(function() {
    $('.out').each(function() {
      $(this).removeClass('activeQeyd');
    });
    $(this).addClass('activeQeyd');
  });
});
