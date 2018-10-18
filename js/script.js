$(function() {

  //mobile menu

  $(".toggle").on("click", function() {
    $(".main-nav__list").slideToggle(300, function() {
      if($(this).css("display") === "none") {
        $(this).removeAttr("style");
      }
    });
  });

anim('.anim-1', 'zoomInUp');
anim('.anim-2', 'zoomInUp');
anim('.anim-3', 'zoomInUp');
anim('.anim-5', 'zoomInUp');
anim('.anim-6', 'zoomInUp');
anim('.anim-7', 'fadeInRight');

function anim(name, type) {
    $(name).css('opacity', 0);
    console.log("sss");
    $(name).waypoint(function() {
        var typ = "animated " + type;
        $(name).addClass(typ);
        $(name).css('opacity', 1);
    }, { offset: '90%' });
}
});
