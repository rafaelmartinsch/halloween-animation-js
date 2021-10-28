$(document).ready(function() {
    // inicializa animação
    animateBird();
  });
  
  function makeNewPosition() {
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - $('.birdFloat').height();
    var w = $(window).width() - $('.birdFloat').width();
  
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
  
    return [nh, nw];
  }
  
  function animateBird() {
    var newq = makeNewPosition();
    var oldq = $('.birdFloat').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
  
    $('.birdFloat').animate({
      top: newq[0],
      left: newq[1]
    }, speed, function() {
      animateBird();
    });
  };
  
  function calcSpeed(prev, next) {
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
  
    var greatest = x > y ? x : y;
  
    // modifique esse valor para modificar a velocidade da animação 
    var speedModifier = 0.1;
    var speed = Math.ceil(greatest / speedModifier);
  
    return speed;
  }