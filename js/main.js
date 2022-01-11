// function populateGallery(images) {
//     let carouselItems = images.map((image, index) => {
//         return `
//         <div class="carousel-item ${(index == 0)? "active": ""}">
//             <img src="${image}" class="d-block w-100" alt="Hemant and pracheta">
//         </div>
//     `
//     }).reduce((prev, current) => prev.concat(current), "");
//     let gallery = document.getElementById("gallery-carousel").getElementsByClassName("carousel-inner")[0];
//     gallery.innerHTML = carouselItems;
// }

// populateGallery(["assets/landing.jpeg", "assets/landing.jpeg","assets/landing.jpeg","assets/landing.jpeg","assets/landing.jpeg","assets/landing.jpeg"]);

var preloaderFadeOutTime = 5500
var preloader = $("#loader");
preloader.fadeOut(preloaderFadeOutTime);
new fullpage("#fullpage", {
    controlArrows: true,
    verticalCentered: false,
    navigation: true,
    navigationTooltips: ['Home', 'Bride & Groom', 'Events', 'Gallery', 'Video'],
    scrollOverflow: true
});