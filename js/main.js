// Animate Smooth Scroll
$(document).ready(function() {
  $("#view-work").click(function() {
    const images = $("#images").position().top;
    $("html, body").animate(
      {
        scrollTop: images
      },
      900
    );
  });
});
