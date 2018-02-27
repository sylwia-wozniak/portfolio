$(function() {
  $('a[href^="#"]').click(function() {  
    var target = $(this.hash);  
    if (target.length == 0) target = $('a[name="' + this.hash.substr(1) + '"]');  
    if (target.length == 0) target = $('html');  
    $('html, body').animate({ scrollTop: target.offset().top }, 500);  
    return false;  
  });  

  var currentImg;
  var img = $('.js-image');
  $('.js-image').each(function(index){
    $(this).data('index',index);
  });

  function showGallery (img){
    var src = img.data('src');
    $('.gallery__items--image').attr('src', src);
    $('.overlay').show();
    $('body').addClass('body--overlay')
    $('.gallery').show();
  }

  $('.js-image').click(function(){
    showGallery($(this));
    currentImg = $(this).data('index');
  });

  $('.gallery__items--close').click(function(){
    $('.overlay').hide();
    $('.gallery').hide();
    $('body').removeClass('body--overlay')
  });

  $('.gallery__items--right').click(function(){
    // currentImg= currentImg+1 < img.length-1? currentImg+1:0;
    if (currentImg+1 < img.length ) currentImg = currentImg+1;
    else currentImg = 0;
    var src = $(img[currentImg]).data('src');
    $('.gallery__items--image').attr('src', src); 
  });

  $('.gallery__items--left').click(function(){
    if (currentImg > 0 ) currentImg = currentImg-1;
    else currentImg = img.length-1;
    var src = $(img[currentImg]).data('src');
    $('.gallery__items--image').attr('src', src); 
  });

});