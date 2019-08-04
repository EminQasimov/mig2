import 'bootstrap';
import '../scss/welcome.scss';

import './todo';
import './azerbaijanis';
import './places';
import './location';
import './culinary';
import './music';
import './festivals';
import './transportation';

var open = false;

$('.menu-icon').click(function() {
  open = !open;
  if (open) {
    $('.menu-list').css({
      display: 'block',
      position: 'absolute',
      background: '#7519b0',
      right: '118px',
      top: '31px',
    });
  } else {
    $('.menu-list').css({
      display: 'none',
      position: 'absolute',
      background: '#7519b0',
      right: '118px',
      top: '31px',
    });
  }
});

window.onresize = function() {
  if (window.innerWidth > 1024) {
    open = false;
    $('.menu-list').css({
      display: 'flex',
      position: 'static',
      background: 'transparent',
    });
  } else {
    $('.menu-list').css({
      display: 'none',
    });
  }
};

// // delete thisssss !!!!!!!!! its for git deploy
// $('.nav-item:first-child .nav-link').click(function(e) {
//   e.preventDefault();
//   window.location.replace('https://' + window.location.hostname + '/mig');
// });
