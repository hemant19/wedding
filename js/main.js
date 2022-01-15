const images = ["TIL05342", "TIL05379", "TIL05408", "TIL05428", "TIL05449", "TIL05467", "TIL05517", "TIL05537", "TIL05347", "TIL05383", "TIL05410", "TIL05431", "TIL05450", "TIL05474", "TIL05519", "TIL05538", "TIL05351", "TIL05385", "TIL05414", "TIL05432", "TIL05452", "TIL05485", "TIL05521", "TIL05539", "TIL05353", "TIL05386", "TIL05415-2", "TIL05433", "TIL05455", "TIL05493", "TIL05523", "TIL05544", "TIL05354", "TIL05387", "TIL05416", "TIL05436", "TIL05456", "TIL05495", "TIL05524", "TIL05545", "TIL05357", "TIL05389", "TIL05417", "TIL05437", "TIL05457", "TIL05497", "TIL05525", "TIL05547", "TIL05360", "TIL05390", "TIL05422", "TIL05441", "TIL05458", "TIL05504", "TIL05528", "TIL05363", "TIL05393", "TIL05423", "TIL05443", "TIL05459", "TIL05505", "TIL05529", "TIL05365", "TIL05404", "TIL05424", "TIL05444", "TIL05460", "TIL05508", "TIL05530", "TIL05373", "TIL05405-2", "TIL05425", "TIL05445", "TIL05463", "TIL05510", "TIL05531", "TIL05375", "TIL05406-2", "TIL05426", "TIL05446", "TIL05464", "TIL05514-2", "TIL05535", "TIL05378", "TIL05407", "TIL05427", "TIL05448", "TIL05466", "TIL05516", "TIL05536"]

const dynamicEl = images.map(img => {
  return {
    src: `assets/gallery/full/${img}.jpg`,
    thumb: `assets/gallery/thumbnails/${img}.webp`,
    sources: [
      { srcset: `assets/gallery/full/${img}.avif`, type: "image/avif" },
      { srcset: `assets/gallery/full/${img}.webp`, type: "image/webp" }
    ]
  };
});

$(window).on("load", function () {
  var preloaderFadeOutTime = 1000;
  var preloader = $("#loader");
  preloader.fadeOut(preloaderFadeOutTime);

  const preweddingGalleryContainer = document.getElementById("prewedding-gallery");

  const preweddingGallery = window.lightGallery(preweddingGalleryContainer, {
    container: preweddingGalleryContainer,
    galleryId: "prewedding-gallery",
    dynamic: true,
    hash: false,
    closable: false,
    showMaximizeIcon: true,
    slideDelay: 400,
    dynamicEl: dynamicEl,
    plugins: [lgZoom, lgThumbnail]
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
      "Pre Wedding"
    ],
    scrollOverflow: true,
  });


  setTimeout(() => {
    preweddingGallery.openGallery();
  }, 200);
});