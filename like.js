$(document).ready(function(){
  $(".nb-like").click(function(){
    $('#like-active').toggleClass('like-animation');
    $('#nb-blink').toggleClass('blink-animation');
  });
});
