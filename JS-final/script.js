const tabs = document.querySelectorAll(`[data-tab-target]`);
const tabContent = document.querySelectorAll(`[data-tab-content]`);

tabs.forEach((tab) => {
  tab.addEventListener(`click`, () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContent.forEach((tabContent) => {
      tabContent.classList.remove(`active`);
    });
    tabs.forEach((tab) => {
      tab.classList.remove(`active`);
    });
    tab.classList.add(`active`);
    target.classList.add(`active`);
  });
});

// swiper
let swiper = new Swiper(".card-content", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
