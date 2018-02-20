$(function() {
  $('.menu__icon').mouseenter(function() {
    $(this).addClass('menu__icon--open');
  });
  $('.menu__icon').mouseleave(function() {
    $(this).removeClass('menu__icon--open');
  });

  $('.js-icon').click(function() {
    $('.js-resume').slideToggle();
    $('.js-icon').toggleClass('icon--active');
  });

  $('a[href^="#"]').click(function() {  
    var target = $(this.hash);  
    if (target.length == 0) target = $('a[name="' + this.hash.substr(1) + '"]');  
    if (target.length == 0) target = $('html');  
    $('html, body').animate({ scrollTop: target.offset().top }, 500);  
    return false;  
  });  

});
 