/* eslint-disable prettier/prettier */
import 'bootstrap';
import '../scss/welcome.scss'; 

import "./qeydiyyat";
import "./olma";
import "./yasama";
import './daimi'; 
import './emek'; 
import "./vetendasliq";
import "./siginacaq";

import WOW from 'wow.js';

var wow = new WOW({ offset: 0 });
wow.init();

var open = false;

$('.menu-icon').click(function() {
  open = !open;
  if (open) {
    $('.menu-list').css({
      display: 'block',
      position: 'absolute',
      background: '#7519b0',
      left: '0',
      top: '77px',
      width: '100%',
    });
      $('.sticky').css("background","rgb(117, 25, 176)")
  } else {
    $('.menu-list').hide();
    window.scrollY < 30 && $('.sticky').css("background","transparent")
  }
});

window.onresize = function() {
  open = false;
  window.scrollY < 30 && $('.sticky').css("background","transparent")
  if (window.innerWidth > 1024) {
    $('.menu-list').css({
      display: 'flex',
      position: 'static',
      background: 'transparent',
    });
  } else {
    $('.menu-list').hide({
      height: '0',
    });
  }
};

$(function() {
  $(window).scroll(function() {
 
    var sticky = $('.sticky'),
      scroll = $(window).scrollTop();
      
    if (scroll >= 100) {
     window.scrollY < 10 ? sticky.css("background","transparent") : sticky.css("background","rgb(117, 25, 176)")
      $('.hero').css({
        marginTop: '-30px',
      });
      sticky.addClass('fixed');
    } else {
      $('.hero').css({
        marginTop: '0px',
      });
      !open && sticky.css("background","transparent")
      sticky.removeClass('fixed');
    }
  });
});



$(function() {
  var v = $('.visa-item');
  var width = v.width();
  v.height(width);

  window.onresize = function() {
    var width = v.width();
    v.height(width + 10);
  };

  $('.visa-item').click(function() {
    $('.visa-item').each(function() {
      $(this).removeClass('activeVisa');
    });

    $(this).addClass('activeVisa');
  });

  
  $('#visaModal').on('show.bs.modal', function(event) {
    var target = $(event.relatedTarget);
    var t = target.find('h1')[0];
    var d = target.find('.visa-desc')[0];

    var title = t && t.innerText;
    var desc = d && d.innerHTML;
    var modal = $(this);

    modal.find('.modal-title').text(title);
    modal.find('.modal-desc').html(desc);
  });

});



// // delete thisssss !!!!!!!!! its for git deploy
// $('.nav-item:first-child .nav-link').click(function(e) {
//   e.preventDefault();
//   window.location.replace('https://' + window.location.hostname + '/mig');
// });
