import '../scss/emek.scss';

$(function() {
  var round = $('.round');
  var width = round.width();
  round.height(width);

  window.onresize = function() {
    var width = round.width();
    round.height(width);
  };
});
