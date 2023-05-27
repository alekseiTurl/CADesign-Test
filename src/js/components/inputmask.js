const selector = document.querySelectorAll('input[type="tel"]');
const mask = new Inputmask("+7 (999) 999-99-99");
mask.mask(selector);
