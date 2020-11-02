$(function(){ // Slideshow
  $('.zl-slideshow > li:gt(0)').hide();
  setInterval(function() {
    $('.zl-slideshow > li:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('.zl-slideshow');
    console.log('iteration');
  }, 10000);
});