$(document).scroll(function(){
  var scroll = $(window).scrollTop();
  var amount = -160+(scroll*1);
  if (amount < 10)
  {
    $('.letter').css({left:amount+"px"});
  }
});