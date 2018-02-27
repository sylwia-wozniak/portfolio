$(function() {
  var $playground = $(this);
  $('#playground').width = window.innerWidth;
  $(this).height = window.innerHeight;
  var defaultOptions = {
    timer: 20,
    score: 0
  }
  var actualScore = defaultOptions.score;
  var actualTimer = defaultOptions.timer;
  $('.score').html(actualScore);
  $('.timer').html(actualTimer);
  var timer;
  var $ball = $('.ball');

  $('.start').click(function(){
    $('.header').hide();
    $('#playground').show();
    timerStart();
  });

  function timerStart(){
    timer = setInterval(function(){
      actualTimer--;
      $('.timer').html(actualTimer);      
      if(actualTimer < 1) {
        clearInterval(timer);
        endGame();
      }
    },1000);
  }

  function incrementScore() {
    actualScore++;
    $('.score').html(actualScore);
  }

  function moveBall() {
    var y = $(window).height() - 50;
    var x = $(window).width() - 50;
    
    var ny = Math.floor(Math.random() * y);
    var nx = Math.floor(Math.random() * x);
    $ball.css({
      left: nx,
      top: ny
    });
  }

  $ball.click(function(){
      incrementScore();
      moveBall();
  });

  function endGame(){
    $('#playground').hide();
    $('.final-score').show();
    $('.new').show();
    if(actualScore >= 15) {
      $('.final-score').html('Winner!<br>' + actualScore + '<br>');
    }else{
      $('.final-score').html('Game Over<br>' + actualScore + '<p>');
    }
    restart();
  }

  function restart(){
    actualScore = defaultOptions.score;
    actualTimer = defaultOptions.timer;
    $('.score').html(actualScore);
    $('.timer').html(actualTimer);
  }

  $('.final-score').click(function(){
    $('.new').hide();
    $('.final-score').hide();
    $('#playground').show();
    timerStart();
  }); 
  

});