$(window).on("load", function () {
  var preloaderFadeOutTime = 1000;
  var preloader = $("#loader");
  preloader.fadeOut(preloaderFadeOutTime);

  $("#animated-thumbnails-gallery")
    .justifiedGallery({
      captions: false,
      lastRow: "center",
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
            controls: true,
            showCloseIcon: true,
            download: false,
            rotate: false,
          },
        }
      );
    });
});

new fullpage("#fullpage", {
  controlArrows: true,
  verticalCentered: false,
  navigation: true,
  navigationTooltips: [
    "Home",
    "Bride & Groom",
    "Events",
    "Gallery",
    "Engagement",
  ],
  scrollOverflow: true,
});
