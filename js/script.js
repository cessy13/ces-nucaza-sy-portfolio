$(document).ready(function () {
  /* for sticky-nav impt: waypoint is a plug-in */
  $(".section-about").waypoint(function (direction) {
    if (direction == "down") {
      $("nav").addClass("sticky");
    } else {
      $("nav").removeClass("sticky");
    }
  });

  /* Mobile Navi */
  $(".mobile-nav").on("click", function (e) {
    e.preventDefault();
    $(".main-nav").css("display", "block");
    $(".mobile-nav").css("display", "none");
    $(".main-nav li").css("display", "block");
  });

  $("#close").on("click", function (e) {
    e.preventDefault();
    $(".main-nav").css("display", "none");
    $(".mobile-nav").css("display", "block");
    $(".main-nav li").css("display", "none");
  });

  
});
