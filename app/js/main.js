const swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    spaceBetween: 10,

    breakpoints: {
        768: {
            spaceBetween: 0,
            enabled: false,
        },
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});