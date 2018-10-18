$(function() {

  //mobile menu

  $(".toggle").on("click", function() {
    $(".main-nav__list").slideToggle(300, function() {
      if($(this).css("display") === "none") {
        $(this).removeAttr("style");
      }
    });
  });

$('.services__item').addClass('animated fadeInRight');

anim('.button', 'zoomInUp');
function anim(button, zoomInUp) {
    $(button).css('opacity', 0);
    console.log("sss");
    $(button).waypoint(function() {
        var typ = "animated " + zoomInUp;
        $(button).addClass(typ);
        $(button).css('opacity', 1);
    }, { offset: '40%' });
}
});
