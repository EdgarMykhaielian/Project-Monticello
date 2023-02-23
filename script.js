// SWIPER SLIDERS
const swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    keyboard: {
        enabled: false,
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,

    },
});

const swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 4000,
        disableOnInteraction: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
// GALLERY LIGHTBOX
baguetteBox.run('.gallery', {
    captions: false,
    animation: 'fadeIn',
    noScrollbars: true
});