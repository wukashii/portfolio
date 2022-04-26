

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 150,
    // reset: true

})

sr.reveal(`.intro-section .row`);

sr.reveal(`.about-section .image-box`, {origin: 'left'});
sr.reveal(`.about-section__text`, {origin: 'right'})

// CONTACT FORM ANIMATION
sr.reveal(`.contact-image`, {origin: 'left'});
sr.reveal(`.form-side`, {origin: 'right'})


// TESTIMONIAL SWIPER
let swiper = new Swiper(".mySwiper", {
    autoHeight: true,
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    //   },

      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
    }
  });