document.addEventListener("DOMContentLoaded", function () {
  // Mobile Nav
  let sideNav = document.querySelectorAll(".sidenav");
  let sideNavInit = M.Sidenav.init(sideNav);
  // Carousel
  let carousel = document.querySelectorAll(".carousel");
  let carouselInit = M.Carousel.init(carousel);
  // Lightbox
  let lightbox = document.querySelectorAll(".materialboxed");
  let lightboxInit = M.Materialbox.init(lightbox);
  // FAQs
  let faqs = document.querySelectorAll(".collapsible");
  let faqsInit = M.Collapsible.init(faqs, {
    accordion: false,
  });
});

//Nice Waves
const waveOptions = {
  fills: ["#E8EAF6", "#9FA8DA"],
  offset: 0.2,
  flowRate: 3,
};
waves(waveOptions).mount("#waves");
