$(window).on("load", function () {
  var preloaderFadeOutTime = 1000;
  var preloader = $("#loader");
  preloader.fadeOut(preloaderFadeOutTime);
});
new fullpage("#fullpage", {
  controlArrows: true,
  verticalCentered: false,
  navigation: true,
  navigationTooltips: ["Home", "Bride & Groom", "Events", "Gallery", "Video"],
  scrollOverflow: true,
});
