const btn = document.querySelector(".header__contatcs-title");
const dropdown = document.querySelector(".header__social");

btn.addEventListener("click", () => {
  dropdown.classList.toggle("visually-hidden");
});
