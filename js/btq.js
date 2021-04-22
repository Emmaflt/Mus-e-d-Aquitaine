function buttonToggle(where, pval, nval) {
    var elem = document.getElementById(where.attributes.rel.value);
    where.value = (where.value == pval) ? nval : pval;
    elem.style.display = (elem.style.display == 'block') ? 'none' : 'block';

    if(elem.style.display == 'block')
    {
      window.scrollTo(elem.scrollLeft, elem.scrollTop + elem.height);
    }
}

$(document).on("click mousemove",function(e){ 
    var x = e.clientX/$(window).width();
    var y = e.clientY/$(window).height();
  
    var newposX = -x*10;
    var newposY = -y*10;
    $(".wheel").css("transform","translate3d("+newposX+"px,"+newposY+"px,0px)");
});


function selectImg(btn)
{

  for(let i = 1; i <= 5; i++) 
  {
    $("#img-" + i).css("display", "none");
  }

  $(".btq-pp-img").attr('src', 'img/btq/pp/'+ btn.value +'.jpg');
  $("#img-" + btn.value).css("display", "block");

  console.log(btn.value);
  console.log("#img-" + btn.value);
}

$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } 
  });
});