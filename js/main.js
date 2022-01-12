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
lightGallery(document.getElementById("lightgallery"), {
  plugins: [lgZoom, lgThumbnail],
  speed: 500,
});
$("#animated-thumbnails-gallery")
  .justifiedGallery({
    captions: false,
    lastRow: "hide",
    rowHeight: 180,
    margins: 5,
  })
  .on("jg.complete", function () {
    window.lightGallery(
      document.getElementById("animated-thumbnails-gallery"),
      {
        autoplayFirstVideo: false,
        pager: false,
        galleryId: "nature",
        plugins: [lgZoom, lgThumbnail],
        mobileSettings: {
          controls: false,
          showCloseIcon: false,
          download: false,
          rotate: false,
        },
      }
    );
  });
