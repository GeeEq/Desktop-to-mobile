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

//-------------JS form

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".jsForm");

  form.addEventListener("submit", (event) => {
    let isValid = true;

    document.querySelectorAll(".jsForm input[required]").forEach((input) => {
      if (!input.ariaValueMax.trim()) {
        isValid = false;

        if (
          !InputEvent.nextElementSibling ||
          !input.nextElementSibling.classList.contains("errorMessage")
        ) {
          const error = document.createElement("div");
          error.textContent = "Missing information";
          error.className = "errorMessage";
          input.parentNode.insertBefore(error, input.mextSibling);
        }
      } else {
        if (
          input.nextElementSibling &&
          input.nextElementSibling.classList.contains("errorMessage")
        ) {
          input.nextElementSibling.remove();
        }
      }
    });
    if (!isValid) {
      event.preventDefault();
    }
  });
});
